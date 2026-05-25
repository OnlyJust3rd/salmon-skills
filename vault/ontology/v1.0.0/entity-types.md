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
- `level`
- `tags`
- `contributor`
- `required-competencies`

Expected body:

- Career heading.
- `## Description`
- `## Responsibilities`
- `## Requirements`

## `skill`

Use for the main note inside each leaf skill folder.

Required properties:

- `type`
- `icon`
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

## `competency`

Use for assessable learning outcomes under a skill.

Required properties:

- `type`
- `icon`
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

## `microskill`

Use for atomic knowledge, technique, or behavior notes under a skill.

Required properties:

- `type`
- `icon`
- `title`
- `tags`
- `parent-skill`
- `contributors`

Optional relationship properties:

- `requires-in-competencies`

Expected body:

- Microskill heading.
- Parent skill link.
- Competency links when available.
- `## Description`

## `medium`

Use for learning content artifacts such as generated explanations, examples, exercises, or lessons.

Required properties:

- `type`
- `icon`
- `title`
- `tags`
- `contributor`
- `outcome`
- `learning-time-in-minutes`

## `contributor`

Use for people or agents who contributed to graph notes.

Required properties:

- `type`
- `title`
- `tags`

## `waypoint`

Use for Obsidian Waypoint folder notes that provide navigation for content and taxonomy folders.

Required properties:

- `type`
- `icon`
- `title`
- `tags`

## `redirect`

Use for alias or compatibility notes that point readers to another canonical note.

Required properties:

- `type`
- `title`
- `tags`
