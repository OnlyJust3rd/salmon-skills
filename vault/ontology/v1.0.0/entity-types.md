---
type: "ontology-note"
title: "Entity Types"
schema-version: "v1.0"
scope: "vault"
tags:
  - ontology
  - entity-types
---

# Entity Types

Each graph note must declare `type` in frontmatter. The `type` value determines the note's required properties, folder, and expected body sections.

## `vault-index`

Use for the vault landing note.

Required properties:

- `type`
- `title`
- `tags`

## `course`

Use for course notes under `vault/courses/`.

Required properties:

- `type`
- `title`
- `tags`
- `course-code`
- `course-name`
- `domain`
- `academic-level`
- `source`

## `career`

Use for career profile notes under `vault/careers/`.

Required properties:

- `type`
- `title`
- `tags`
- `job-title`
- `focus-area`
- `source`

Recommended properties:

- `required-competencies`

## `Skill`

Use for the main note inside each leaf skill folder.

Required properties:

- `type`
- `title`
- `tags`
- `contributors`
- `competencies`
- `standard-competency`
- `microskills`

Expected body:

- Skill heading.
- Description.
- `## Competencies`
- `## Microskills`

## `Competency`

Use for assessable learning outcomes under a skill.

Required properties:

- `type`
- `title`
- `tags`
- `strict-prerequisites`
- `miller-level`
- `optional-prerequisites`
- `parent-skill`
- `requires-microskills`
- `contributors`

Expected body:

- Competency heading.
- Parent skill link.
- `## Competency Statement`
- `## Strict Prerequisites`
- `## Optional Prerequisites`
- `## Microskills`

## `Microskill`

Use for atomic knowledge, technique, or behavior notes under a skill.

Required properties:

- `type`
- `title`
- `tags`
- `parent-skill`
- `requires-in-competencies`
- `contributors`

Expected body:

- Microskill heading.
- Parent skill link.
- Competency links when available.
- `## Description`

## `medium`

Use for learning content artifacts such as generated explanations, examples, exercises, or lessons.

Required properties:

- `type`
- `title`
- `tags`
- `medium-kind`
- `source`

Recommended properties:

- `supports`
- `related-competencies`
- `related-microskills`

## `contributor`

Use for people or agents who contributed to graph notes.

Required properties:

- `type`
- `title`
- `tags`

## `redirect`

Use for alias or compatibility notes that point readers to another canonical note.

Required properties:

- `type`
- `title`
- `tags`
