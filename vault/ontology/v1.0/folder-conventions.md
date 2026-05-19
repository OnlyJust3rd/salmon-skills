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
  mediums/
  ontology/
  docs/
```

Rules:

- Use `courses/` for course notes.
- Do not use legacy course folder names.
- Use `careers/` for career profile notes.
- Use `skills/` for macro skills, competencies, and micro-skills.
- Use `mediums/` for learning content artifacts.
- Use `ontology/` only for schema and rule notes.

## Courses

Course notes live under:

```text
vault/courses/<institution>/<catalog-or-version>/<course-slug>.md
```

Rules:

- The note must use `type: "course"`.
- The filename should be a stable slug.
- Course notes should link to macro skills under `## Macro Skills`.

## Careers

Career notes live under:

```text
vault/careers/<focus-area>/<career-slug>.md
```

Rules:

- The note must use `type: "career"` or `type: "redirect"`.
- Career notes should link to required competencies under `## Required Competencies`.

## Skills

Skill notes live under:

```text
vault/skills/<taxonomy-path>/<skill-name>/
  <skill-name>.md
  competencies/
    <competency-slug>.md
  microskills/
    <micro-skill-slug>.md
```

Rules:

- `<taxonomy-path>` may contain one or more nested folders.
- The leaf folder name and macro-skill filename must match.
- The macro-skill note must use `type: "macro-skill"`.
- Competency notes must live in `competencies/` and use `type: "competency"`.
- Micro-skill notes must live in `microskills/` and use `type: "micro-skill"`.
- Skill taxonomy is derived from folders, not frontmatter properties.

## Mediums

Learning media live under:

```text
vault/mediums/<medium-kind>/<medium-slug>.md
```

Rules:

- Medium notes should use `type: "medium"`.
- Medium notes should link back to the most specific supported graph nodes.

## Bases

Base files may live at the vault root or in a documented views folder.

Rules:

- Base files must be valid YAML.
- Base filters should use current folder names.
- Base views should filter by `type` for entity-specific views.
