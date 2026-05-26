---
type: "ontology-note"
title: "Folder Conventions"
schema-version: "v1.0"
scope: "vault"
tags:
  - ontology
  - folders
---

# Folder Conventions

Folder paths are part of the schema. Generated notes should use these folders unless the ontology is revised.

## Top-level Folders

```text
vault/
  courses/
  careers/
  skills/
  contributors/
  mediums/
  practice/
  ontology/
  docs/
```

Rules:

- Use `courses/` for course notes.
- Use `careers/` for career profile notes.
- Use `skills/` for skills, competencies, and microskills.
- Use `contributors/` for contributor notes.
- Use `mediums/` for reference and content learning artifacts.
- Use `practice/` for applied learning artifacts such as simulators, quizzes, projects, drills, and interactive exercises.
- Use `ontology/` only for schema and rule notes.

## Courses

Course notes live under:

```text
vault/courses/<institution>/<catalog-or-version>/<course-slug>.md
```

Rules:

- The note must use `type: "course"`.
- The filename should be a stable slug.
- Course notes should link to related skills under `## Skills`.

## Careers

Career notes live under:

```text
vault/careers/<domain-or-focus-area>/<career-slug>.md
```

Rules:

- The note must use `type: "career"` or `type: "redirect"`.
- Career notes should link to role requirements under `## Requirements`.
- Career notes should use `level`, `contributor`, and `required-competencies` in frontmatter.

## Skills

Skill notes live under:

```text
vault/skills/<taxonomy-path>/<skill-name>/
  <skill-name>.md
  competencies/
    <competency-slug>.md
  microskills/
    <microskill-slug>.md
```

Rules:

- Taxonomy folders with parsed Markdown content should have a direct Waypoint folder note.
- A Waypoint folder note must contain a Waypoint marker comment.
- Do not require Waypoint notes inside skill content folders: `<skill-name>/`, `<skill-name>/competencies/`, or `<skill-name>/microskills/`.
- Skill classification is path-only. Do not add taxonomy-like frontmatter such as `domain`, `subdomain`, `capability-area`, `skill-kind`, `source-path`, or `migration-status`.
- Current top-level skill folders are `appliances/`, `business/`, `computing/`, `digital-media/`, `mathematics/`, `professional-practice/`, and `vocational/`. Add future top-level domains only when real content exists.
- Vocational skills should live under `vocational/`, using branches such as `hvac/`, `electrical/`, `plumbing/`, `automotive/`, `appliance-repair/`, and `general-technician/`.
- Computing skills should live under one of `computing/computer-science/`, `computing/programming/`, `computing/software-engineering/`, `computing/systems-infrastructure/`, `computing/data-ai/`, `computing/security-privacy/`, or `computing/hardware-embedded/`.
- Programming language and language-agnostic coding skills should live under `computing/programming/`, using branches such as `programming-languages/`, `programming-principles/`, `programming-paradigms/`, and `code-quality/`.
- Applied software construction skills should live under direct `computing/software-engineering/` branches such as `frontend-development/`, `backend-development/`, and `mobile-development/`.
- Software engineering design, testing, quality, and process skills should live under `computing/software-engineering/` branches such as `software-design/`, `testing-quality/`, and `software-practices/`.
- Systems infrastructure skills should live under `computing/systems-infrastructure/`, using branches such as `compute-runtime/`, `networking/`, `cloud-platforms/`, `delivery-platforms/`, `operations-reliability/`, and `system-administration/`.
- `<taxonomy-path>` may contain one or more nested folders.
- The leaf folder name and skill filename must match.
- The skill note must use `type: "skill"`.
- Competency notes must live in `competencies/` and use `type: "competency"`.
- Competency filenames must start with `L<miller-level>-`, using the note's `miller-level` property as the source of truth.
- Microskill notes must live in `microskills/` and use `type: "microskill"`.
- Skill taxonomy is derived from folders, not frontmatter properties. Relationship fields may link across taxonomy paths.

## Contributors

Contributor notes live under:

```text
vault/contributors/<contributor-slug>.md
```

Rules:

- Contributor notes must use `type: "contributor"`.
- Skill graph notes should link contributors through the `contributors` property.

## Mediums

Reference and content learning media live under:

```text
vault/mediums/<medium-type>/<source>/<medium-slug>.md
```

Rules:

- Medium notes should use `type: "medium"`.
- `<medium-type>` is the broad format or origin type, such as `youtube`, `course`, `doc`, `book`, `article`, `github`, `roadmap`, or `ai-generated`.
- `<source>` is the provider, publisher, channel, repository owner, or generating contributor slug, such as `fireship`, `postgresql`, `cmu`, or `just3rd`.
- Medium notes should set `contributor` to one contributor wikilink.
- Medium notes should set `learning-outcomes` to the `microskill` or `competency` notes they teach or support.
- Medium notes may set `related-skills` to broad `skill` notes for discovery and browsing.
- Medium notes should estimate `learning-time-in-minutes` as a positive integer.

## Practice

Applied learning media live under:

```text
vault/practice/<practice-kind>/<practice-slug>.md
```

Rules:

- Practice notes should use `type: "medium"` and the same properties as medium notes.
- `<practice-kind>` is the activity format, such as `simulator`, `quiz`, `project`, `drill`, or `interactive`.
- Practice notes should set `learning-outcomes` to the competency or microskill notes the activity helps learners apply.
- Practice notes may set `related-skills` to broad `skill` notes for discovery and browsing.

## Bases

Base files may live at the vault root or in a documented views folder.

Rules:

- Base files must be valid YAML.
- Base filters should use current folder names.
- Base views should filter by `type` for entity-specific views.
