# Contributing To SALMON

Thanks for helping improve SALMON. The project is a Markdown knowledge graph plus a small TypeScript toolchain.

## Before You Start

Install the workspace and run validation:

```sh
pnpm install
pnpm validate
```

Use Node.js `22.13.0` and pnpm `10.23.0`.

## Add Or Edit A Skill

Skill notes live at:

```text
vault/skills/<taxonomy-path>/<skill-slug>/<skill-slug>.md
```

Requirements:

- Frontmatter `type` must be `"Skill"`.
- Include `title`, `tags`, `contributors`, `competencies`, and `microskills`.
- Keep the leaf folder and skill filename identical.
- Add body sections for `## Competencies` and `## Microskills`.

## Add A Competency

Competency notes live at:

```text
vault/skills/<taxonomy-path>/<skill-slug>/competencies/<competency-slug>.md
```

Requirements:

- Frontmatter `type` must be `"Competency"`.
- Include `title`, `tags`, `strict-prerequisites`, `miller-level`, `optional-prerequisites`, `parent-skill`, `requires-microskills`, and `contributors`.
- Use full vault-relative wikilinks in relationship fields.
- Link back to the parent skill in frontmatter and body.

## Add A Microskill

Microskill notes live at:

```text
vault/skills/<taxonomy-path>/<skill-slug>/microskills/<microskill-slug>.md
```

Requirements:

- Frontmatter `type` must be `"Microskill"`.
- Include `title`, `tags`, `parent-skill`, `requires-in-competencies`, and `contributors`.
- Keep the description focused on one atomic concept, behavior, or technique.

## Add A Learning Medium

Learning media live at:

```text
vault/mediums/<medium-kind>/<medium-slug>.md
```

Requirements:

- Frontmatter `type` must be `"medium"`.
- Include `title`, `tags`, `medium-kind`, and `source`.
- Add `supports` links to the most specific graph nodes the medium supports.

## Add A Career

Career notes live at:

```text
vault/careers/<focus-area>/<career-slug>.md
```

Requirements:

- Frontmatter `type` must be `"career"`.
- Include `title`, `tags`, `job-title`, `focus-area`, and `source`.
- Put linked competency requirements under `## Required Competencies`.

## Add A Contributor

Contributor notes live at:

```text
vault/contributors/<contributor-slug>.md
```

Requirements:

- Frontmatter `type` must be `"contributor"`.
- Include `title` and `tags`.
- Use the contributor note in `contributors` fields when crediting graph work.

## Pull Request Checklist

Before opening a pull request:

```sh
pnpm validate
pnpm test
pnpm lint
pnpm build
```

Keep generated or local-only files out of commits, including `node_modules/`, build output, `.DS_Store`, and personal Obsidian workspace state.
