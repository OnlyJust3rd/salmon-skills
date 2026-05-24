import { readFile } from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { glob } from "glob";

export interface VaultFileEntry {
  path: string;
  content: string;
  absolutePath?: string;
}

export interface VaultParserOptions {
  ignoredDirectories?: string[];
  ignoredFiles?: string[];
  includeUnresolvedEdges?: boolean;
  parseTargets?: string[];
}

export type FrontmatterValue =
  | string
  | number
  | boolean
  | null
  | FrontmatterList;
export interface FrontmatterList extends Array<FrontmatterValue> {}
export type Frontmatter = Record<string, FrontmatterValue>;

export interface VaultNode {
  id: string;
  path: string;
  absolutePath?: string;
  content: string;
  frontmatter: Frontmatter;
}

export interface VaultEdge {
  from: string;
  to: string;
  rawTarget: string;
  resolved: boolean;
}

export interface VaultGraph {
  nodes: VaultNode[];
  edges: VaultEdge[];
}

export type VaultValidationSeverity = "error" | "warning";

export interface VaultValidationIssue {
  severity: VaultValidationSeverity;
  code: string;
  message: string;
  path?: string;
  nodeId?: string;
}

export interface VaultValidationCounts {
  nodes: number;
  edges: number;
  errors: number;
  warnings: number;
  byType: Record<string, number>;
}

export interface VaultValidationResult {
  valid: boolean;
  errors: VaultValidationIssue[];
  warnings: VaultValidationIssue[];
  counts: VaultValidationCounts;
}

const DEFAULT_IGNORED_DIRECTORIES = new Set([
  ".git",
  ".obsidian",
  "node_modules",
]);
const DEFAULT_PARSE_TARGETS = [
  "skills",
  "careers",
  "courses",
  "mediums",
  "contributors",
];
const ENTITY_REQUIRED_PROPERTIES = {
  "vault-index": ["type", "title", "tags"],
  course: [
    "type",
    "title",
    "tags",
    "course-code",
    "course-name",
    "domain",
    "academic-level",
    "source",
  ],
  career: [
    "type",
    "title",
    "level",
    "tags",
    "contributor",
    "required-competencies",
  ],
  skill: [
    "type",
    "title",
    "tags",
    "contributors",
    "competencies",
    "standard-competency",
    "microskills",
  ],
  competency: [
    "type",
    "title",
    "tags",
    "strict-prerequisites",
    "miller-level",
    "optional-prerequisites",
    "parent-skill",
    "requires-microskills",
    "contributors",
  ],
  microskill: [
    "type",
    "title",
    "tags",
    "parent-skill",
    "requires-in-competencies",
    "contributors",
  ],
  medium: [
    "type",
    "title",
    "tags",
    "contributor",
    "outcome",
    "learning-time-in-minutes",
  ],
  contributor: ["type", "title", "tags"],
  redirect: ["type", "title", "tags"],
} as const satisfies Record<string, readonly string[]>;

const KNOWN_ENTITY_TYPES = new Set(Object.keys(ENTITY_REQUIRED_PROPERTIES));

export async function parseVault(
  vaultRoot: string,
  options: VaultParserOptions = {},
): Promise<VaultGraph> {
  const root = path.resolve(vaultRoot);
  const ignoredDirectories = new Set([
    ...DEFAULT_IGNORED_DIRECTORIES,
    ...(options.ignoredDirectories ?? []),
  ]);
  const ignoredFiles = new Set((options.ignoredFiles ?? []).map(normalizePath));
  const parseTargets = (options.parseTargets ?? DEFAULT_PARSE_TARGETS).map(
    normalizeDirectoryPath,
  );
  const patterns = parseTargets.map((target) => `${target}/**/*.md`);
  const markdownFiles = await glob(patterns, {
    cwd: root,
    dot: true,
    ignore: [...ignoredDirectories].flatMap((directory) => [
      `${directory}/**`,
      `**/${directory}/**`,
    ]),
    nodir: true,
  });
  const entries = await Promise.all(
    markdownFiles
      .filter((file) => !ignoredFiles.has(normalizePath(file)))
      .sort()
      .map((file) => readVaultFile(root, normalizePath(file))),
  );

  return parseVaultEntries(entries, options);
}

export function parseVaultEntries(
  entries: VaultFileEntry[],
  options: VaultParserOptions = {},
): VaultGraph {
  const includeUnresolvedEdges = options.includeUnresolvedEdges ?? false;
  const nodes = entries
    .filter((entry) => entry.path.toLowerCase().endsWith(".md"))
    .map((entry): VaultNode => {
      const relativePath = normalizePath(entry.path);
      return {
        id: toNodeId(relativePath),
        path: relativePath,
        absolutePath: entry.absolutePath,
        content: entry.content,
        frontmatter: parseFrontmatter(entry.content),
      };
    });

  const nodeIds = new Set(nodes.map((node) => node.id));
  const basenameIndex = buildBasenameIndex(nodes);
  const entriesById = new Map(
    entries
      .filter((entry) => entry.path.toLowerCase().endsWith(".md"))
      .map((entry) => [toNodeId(normalizePath(entry.path)), entry]),
  );
  const edges: VaultEdge[] = [];

  for (const node of nodes) {
    const entry = entriesById.get(node.id);
    if (!entry) continue;

    for (const wikilink of extractWikilinks(entry.content)) {
      const target = resolveWikilinkTarget(
        wikilink.target,
        node.id,
        nodeIds,
        basenameIndex,
      );

      if (target || includeUnresolvedEdges) {
        edges.push({
          from: node.id,
          to: target ?? normalizeLinkTarget(wikilink.target),
          rawTarget: wikilink.rawTarget,
          resolved: target !== undefined,
        });
      }
    }
  }

  return { nodes, edges };
}

export async function validateVault(
  vaultRoot: string,
  options: VaultParserOptions = {},
): Promise<VaultValidationResult> {
  const graph = await parseVault(vaultRoot, {
    ...options,
    includeUnresolvedEdges: true,
  });

  return validateGraph(graph);
}

export function validateGraph(graph: VaultGraph): VaultValidationResult {
  const issues: VaultValidationIssue[] = [];
  const byType: Record<string, number> = {};

  for (const node of graph.nodes) {
    const type = node.frontmatter.type;
    const typeLabel = typeof type === "string" ? type : "<missing>";
    byType[typeLabel] = (byType[typeLabel] ?? 0) + 1;

    if (typeof type !== "string" || !type) {
      issues.push(makeIssue("MISSING_TYPE", "Graph note is missing frontmatter `type`.", node));
      continue;
    }

    if (!isKnownEntityType(type)) {
      issues.push(
        makeIssue("UNKNOWN_TYPE", `Graph note uses unknown type \`${type}\`.`, node),
      );
      continue;
    }

    for (const property of ENTITY_REQUIRED_PROPERTIES[type]) {
      if (isMissingRequiredValue(node.frontmatter[property])) {
        issues.push(
          makeIssue(
            "MISSING_REQUIRED_PROPERTY",
            `\`${type}\` note is missing required property \`${property}\`.`,
            node,
          ),
        );
      }
    }

    validateNodeLocation(node, type, issues);
  }

  for (const edge of graph.edges) {
    if (!edge.resolved) {
      issues.push({
        severity: "error",
        code: "UNRESOLVED_WIKILINK",
        message: `Unresolved wikilink target \`${edge.rawTarget}\`.`,
        nodeId: edge.from,
      });
    }
  }

  const errors = issues.filter((issue) => issue.severity === "error");
  const warnings = issues.filter((issue) => issue.severity === "warning");

  return {
    valid: errors.length === 0,
    errors,
    warnings,
    counts: {
      nodes: graph.nodes.length,
      edges: graph.edges.length,
      errors: errors.length,
      warnings: warnings.length,
      byType,
    },
  };
}

async function readVaultFile(
  root: string,
  relativePath: string,
): Promise<VaultFileEntry> {
  const absolutePath = path.join(root, relativePath);

  return {
    path: relativePath,
    content: await readFile(absolutePath, "utf8"),
    absolutePath,
  };
}

function extractWikilinks(
  content: string,
): Array<{ rawTarget: string; target: string }> {
  const links: Array<{ rawTarget: string; target: string }> = [];
  const searchableContent = stripMarkdownCode(content);
  const regex = /!?\[\[([^\]\n]+)\]\]/g;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(searchableContent)) !== null) {
    const rawTarget = match[1]?.trim() ?? "";
    const target = stripWikilinkDecorations(rawTarget);

    if (target) {
      links.push({ rawTarget, target });
    }
  }

  return links;
}

function parseFrontmatter(content: string): Frontmatter {
  const lines = content.split(/\r?\n/);
  if (lines[0]?.trim() !== "---") return {};

  const endIndex = lines.findIndex(
    (line, index) => index > 0 && line.trim() === "---",
  );
  if (endIndex === -1) return {};

  return parseSimpleYaml(lines.slice(1, endIndex));
}

function parseSimpleYaml(lines: string[]): Frontmatter {
  const frontmatter: Frontmatter = {};
  let index = 0;

  while (index < lines.length) {
    const line = lines[index] ?? "";
    const match = /^([A-Za-z0-9_-]+):(?:\s*(.*))?$/.exec(line);
    if (!match) {
      index += 1;
      continue;
    }

    const key = match[1] ?? "";
    const value = match[2]?.trim() ?? "";
    const list: FrontmatterValue[] = [];
    let nextIndex = index + 1;

    while (nextIndex < lines.length) {
      const itemMatch = /^\s+-\s*(.*)$/.exec(lines[nextIndex] ?? "");
      if (!itemMatch) break;
      list.push(parseScalar(itemMatch[1] ?? ""));
      nextIndex += 1;
    }

    if (value) {
      frontmatter[key] = parseScalar(value);
      index += 1;
    } else if (list.length > 0) {
      frontmatter[key] = list;
      index = nextIndex;
    } else {
      frontmatter[key] = null;
      index += 1;
    }
  }

  return frontmatter;
}

function parseScalar(value: string): FrontmatterValue {
  const trimmed = value.trim();
  if (!trimmed || trimmed === "null" || trimmed === "~") return null;
  if (trimmed === "[]") return [];
  if (trimmed === "true") return true;
  if (trimmed === "false") return false;
  if (/^-?\d+(?:\.\d+)?$/.test(trimmed)) return Number(trimmed);

  const quoted = /^(['"])(.*)\1$/.exec(trimmed);
  return quoted ? (quoted[2] ?? "") : trimmed;
}

function makeIssue(
  code: string,
  message: string,
  node: VaultNode,
): VaultValidationIssue {
  return {
    severity: "error",
    code,
    message,
    path: node.path,
    nodeId: node.id,
  };
}

function isMissingRequiredValue(value: FrontmatterValue | undefined): boolean {
  return value === undefined || value === null || value === "";
}

function isKnownEntityType(
  value: string,
): value is keyof typeof ENTITY_REQUIRED_PROPERTIES {
  return KNOWN_ENTITY_TYPES.has(value);
}

function validateNodeLocation(
  node: VaultNode,
  type: string,
  issues: VaultValidationIssue[],
): void {
  if (type === "course" && !node.path.startsWith("courses/")) {
    issues.push(makeIssue("INVALID_LOCATION", "`course` notes must live under `courses/`.", node));
  }

  if ((type === "career" || type === "redirect") && !node.path.startsWith("careers/")) {
    issues.push(makeIssue("INVALID_LOCATION", "`career` and `redirect` notes must live under `careers/`.", node));
  }

  if (type === "contributor" && !node.path.startsWith("contributors/")) {
    issues.push(makeIssue("INVALID_LOCATION", "`contributor` notes must live under `contributors/`.", node));
  }

  if (type === "medium" && !node.path.startsWith("mediums/")) {
    issues.push(makeIssue("INVALID_LOCATION", "`medium` notes must live under `mediums/`.", node));
  }

  if (type === "skill" && !isSkillNotePath(node.path)) {
    issues.push(
      makeIssue(
        "INVALID_SKILL_LOCATION",
        "`skill` notes must follow `skills/<taxonomy-path>/<skill-slug>/<skill-slug>.md`.",
        node,
      ),
    );
  }

  if (type === "competency" && !isChildNotePath(node.path, "competencies")) {
    issues.push(
      makeIssue(
        "INVALID_COMPETENCY_LOCATION",
        "`competency` notes must live in a skill `competencies/` directory.",
        node,
      ),
    );
  }

  if (type === "microskill" && !isChildNotePath(node.path, "microskills")) {
    issues.push(
      makeIssue(
        "INVALID_MICROSKILL_LOCATION",
        "`microskill` notes must live in a skill `microskills/` directory.",
        node,
      ),
    );
  }
}

function isSkillNotePath(relativePath: string): boolean {
  const id = toNodeId(relativePath);
  const parts = id.split("/");
  return (
    parts.length >= 3 &&
    parts[0] === "skills" &&
    parts.at(-1) === parts.at(-2)
  );
}

function isChildNotePath(relativePath: string, childDirectory: string): boolean {
  const parts = toNodeId(relativePath).split("/");
  const childIndex = parts.lastIndexOf(childDirectory);
  return parts[0] === "skills" && childIndex > 1 && childIndex === parts.length - 2;
}

function stripMarkdownCode(content: string): string {
  return content
    .replace(/```[\s\S]*?```/g, "")
    .replace(/~~~[\s\S]*?~~~/g, "")
    .replace(/`[^`\n]*`/g, "");
}

function stripWikilinkDecorations(target: string): string {
  return target.split("|", 1)[0]?.split("#", 1)[0]?.trim() ?? "";
}

function resolveWikilinkTarget(
  target: string,
  sourceId: string,
  nodeIds: Set<string>,
  basenameIndex: Map<string, string[]>,
): string | undefined {
  const normalizedTarget = normalizeLinkTarget(target);
  if (!normalizedTarget) return undefined;

  if (nodeIds.has(normalizedTarget)) return normalizedTarget;

  const sourceDirectory = path.posix.dirname(sourceId);
  const relativeTarget = normalizePath(
    path.posix.join(sourceDirectory, normalizedTarget),
  );
  if (nodeIds.has(relativeTarget)) return relativeTarget;

  const basenameMatches =
    basenameIndex.get(path.posix.basename(normalizedTarget)) ?? [];
  return basenameMatches.length === 1 ? basenameMatches[0] : undefined;
}

function buildBasenameIndex(nodes: VaultNode[]): Map<string, string[]> {
  const index = new Map<string, string[]>();

  for (const node of nodes) {
    const basename = path.posix.basename(node.id);
    const matches = index.get(basename) ?? [];
    matches.push(node.id);
    index.set(basename, matches);
  }

  return index;
}

function normalizeLinkTarget(target: string): string {
  return toNodeId(normalizePath(decodeSafe(target).replace(/^\/+/, "")));
}

function toNodeId(relativePath: string): string {
  return normalizePath(relativePath).replace(/\.md$/i, "");
}

function normalizePath(value: string): string {
  return toPosix(value).replace(/^\.\//, "").replace(/\/+/g, "/");
}

function normalizeDirectoryPath(value: string): string {
  return normalizePath(value).replace(/^\/+|\/+$/g, "");
}

function toPosix(value: string): string {
  return value.replace(/\\/g, "/").split(path.sep).join(path.posix.sep);
}

function decodeSafe(value: string): string {
  try {
    return decodeURIComponent(value);
  } catch {
    return value;
  }
}
