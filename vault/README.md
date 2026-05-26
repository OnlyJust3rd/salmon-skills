
# SALMON: Skill-Aligned Learning Map Ontology

This vault is a typed learning knowledge graph for courses, careers, skills, competencies, microskills, contributors, and learning media.

The main rules and schema live in [[schemas|SALMON v1.0]]. Use the ontology when adding, moving, generating, or validating vault notes.

## License

Content under this `vault/` directory is licensed under the Creative Commons Attribution 4.0 International License. See `../LICENSE.md` and `../LICENSES/CC-BY-4.0.txt` from the repository root.

## Quick Guide

### `courses/`

Course notes live here. A course note represents one curriculum unit and should use `type: "course"` in frontmatter.

Use this folder for:

- Course descriptions.
- Course-level competencies.
- Links from a course to its related skills.

Expected pattern:

```text
courses/<institution>/<catalog-or-version>/<course-slug>.md
```

Course notes should link related skills under `## Skills`.

### `careers/`

Career profile notes live here. A career note represents a role and the competencies required for that role. It should use `type: "career"` in frontmatter.

Use this folder for:

- Job or role profiles.
- Required competency lists.
- Career-to-competency links.
- Redirect notes for aliases or renamed roles.

Expected pattern:

```text
careers/<domain-or-focus-area>/<career-slug>.md
```

Career notes use `level`, one `contributor`, and `required-competencies` links to `competency` or broader `skill` notes. Their body sections are `## Description`, `## Responsibilities`, and `## Requirements`.

### `skills/`

The skill graph lives here. This is the main structured knowledge area of the vault.

Use this folder for:

- Skill notes.
- Competency notes.
- Microskill notes.
- Vocational technician, repair, installation, and hands-on trade skills.

Expected pattern:

```text
skills/<taxonomy-path>/<skill-name>/
  <skill-name>.md
  competencies/
    <competency-slug>.md
  microskills/
    <microskill-slug>.md
```

Rules:

- `<taxonomy-path>` may contain one or more nested folders.
- The leaf folder and skill note should share the same slug.
- Skill notes use `type: "skill"`.
- Competency notes use `type: "competency"`.
- Microskill notes use `type: "microskill"`.
- Skill `standard-competency` values identify the expected competency level for someone claiming that skill.
- Competency filenames use their `miller-level` as the `L<miller-level>-` prefix.
- Competencies describe assessable learning outcomes.
- Microskills describe focused knowledge, techniques, or behaviors that support competencies.
- Vocational skills live under `skills/vocational/` for hands-on technician domains such as HVAC, electrical, plumbing, automotive, appliance repair, and general technician safety.

### `contributors/`

Contributor notes live here. A contributor note represents a person or agent credited by graph notes. It should use `type: "contributor"` in frontmatter.

Use this folder for:

- Contributor identities.
- Contributor metadata.
- Targets for `contributors` links in skills, competencies, and microskills.

Expected pattern:

```text
contributors/<contributor-slug>.md
```

### `mediums/`

Learning reference and content artifacts live here. These notes explain or demonstrate material from the skill graph.

Use this folder for:

- Generated explanations.
- Examples.
- Lessons.
- Other learning artifacts connected to skills, competencies, or microskills.

Expected pattern:

```text
mediums/<medium-type>/<source>/<medium-slug>.md
```

`<medium-type>` is the format or origin, such as `youtube`, `course`, `doc`, `book`, `article`, `github`, `roadmap`, or `ai-generated`. `<source>` is the provider, publisher, channel, repository owner, or generating contributor slug. Medium notes use `type: "medium"`, name one `contributor`, and list `learning-outcomes` as wikilinks to competency or microskill notes. Use optional `related-skills` links for broad skill coverage. Medium notes also include `learning-time-in-minutes` as a positive integer estimate.

### `practice/`

Applied learning artifacts live here. These notes help learners use knowledge through simulators, quizzes, projects, drills, and interactive exercises.

Expected pattern:

```text
practice/<practice-kind>/<practice-slug>.md
```

Practice notes reuse `type: "medium"` and the medium properties so they can connect to `learning-outcomes`, `related-skills`, contributors, and graph views.

### `ontology/`

Vault rules and schema live here. This folder is the authority for how the vault should be structured.

Use this folder for:

- Entity type definitions.
- Relationship rules.
- Frontmatter property rules.
- Folder conventions.
- Controlled vocabularies.
- Validation rules.

Current schema entrypoint:

- [[schemas|SALMON v1.0]]

### `docs/`

General documentation lives here when it is not itself part of the typed learning graph.

Use this folder for:

- Project documentation.
- Process notes.
- Import or generation instructions.
- Human-facing reference material that does not belong in `courses/`, `careers/`, `skills/`, `mediums/`, `practice/`, or `ontology/`.

### `.obsidian/`

Obsidian workspace configuration lives here.

Use this folder only for Obsidian settings, plugins, workspace state, and app configuration. Do not put graph content here.

### `.trash/`

Obsidian deleted-note storage lives here.

Treat this as temporary recovery storage, not part of the graph.

## Root Files

Root-level `.base` files provide Obsidian database-style views over the graph.

- [[Knowledge Graph Examples.base]]
- [[Skill Structure Validation.base]]

Root-level Markdown should be limited to entrypoints and high-level documentation.

## Browse

![[Knowledge Graph Examples.base]]

## Main Views

- [[Knowledge Graph Examples.base#Careers|Careers]]
- [[Knowledge Graph Examples.base#Competencies|Competencies]]
- [[Knowledge Graph Examples.base#Skills|Skills]]
- [[Knowledge Graph Examples.base#Microskills|Microskills]]
- [[Knowledge Graph Examples.base#Courses|Courses]]
