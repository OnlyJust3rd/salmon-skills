---
name: salmon-vault-editor
description: Edit the SALMON knowledge-base vault in Markdown using the repository ontology as the source of truth. Use when Codex needs to add, move, repair, normalize, or review files under a SALMON vault such as vault/skills, vault/careers, vault/courses, vault/mediums, vault/contributors, or vault/ontology; create or update skill, competency, microskill, career, course, contributor, and medium notes; maintain wikilinks/frontmatter; or validate vault graph structure against ontology rules.
---

# SALMON Vault Editor

## Core Rule

Treat `vault/ontology/` as the source of truth. Before changing graph notes, read the current ontology entrypoint and the relevant template:

- Prefer the latest versioned ontology directory, currently `vault/ontology/v1.0.0/`.
- Read `schemas.md`, then the specific files needed: `entity-types.md`, `folder-conventions.md`, `properties.md`, `relationships.md`, `data-quality.md`, and `templates/*.md`.
- If the ontology disagrees with examples elsewhere in the vault, follow the ontology and mention the mismatch.

For detailed entity rules and workflows, read `references/salmon-vault-workflows.md`.

## Editing Workflow

1. Identify the target entity type and read its ontology template.
2. Inspect nearby existing notes in the same folder to match local naming and body style.
3. Use lowercase hyphenated slugs for files and folders.
4. Use full vault-relative wikilinks in relationship fields, with the leaf slug as alias.
5. Keep taxonomy in paths, not duplicated frontmatter.
6. Update both sides of owned relationships when adding graph nodes:
   - Skill `competencies` and `microskills` lists.
   - Competency `requires-microskills`.
   - Microskill `requires-in-competencies`.
7. Run validation when repo tooling exists:

```sh
pnpm validate
```

If validation is unavailable, manually check required frontmatter, expected body sections, paths, and wikilinks.

## Entity Shortcuts

- Skill: `vault/skills/<taxonomy-path>/<skill-slug>/<skill-slug>.md`
- Competency: `vault/skills/<taxonomy-path>/<skill-slug>/competencies/L<miller-level>-<competency-slug>.md`
- Microskill: `vault/skills/<taxonomy-path>/<skill-slug>/microskills/<microskill-slug>.md`
- Career: `vault/careers/<domain-or-focus-area>/<career-slug>.md`
- Course: `vault/courses/<institution>/<catalog-or-version>/<course-slug>.md`
- Medium: `vault/mediums/<contributor>/<medium-kind>/<medium-slug>.md`
- Contributor: `vault/contributors/<contributor-slug>.md`

## Safety

- Do not invent schema fields when the ontology has a required vocabulary.
- Do not mass-rewrite generated vault content unless the user explicitly asks.
- Do not touch `.obsidian/`, `.trash/`, generated graph JSON, build outputs, or local editor files unless the user asks.
- Preserve existing user changes. If a note has unrelated edits, make the smallest compatible change.
