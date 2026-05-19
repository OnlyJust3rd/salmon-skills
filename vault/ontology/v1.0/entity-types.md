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

Expected body:

- Brief vault purpose.
- Links or embeds for primary Base views.

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

Recommended properties:

- `macro-skill-count`

Expected body:

- Course heading.
- Course description.
- `## Course Competencies`
- `## Macro Skills`

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

- `required-competency-count`
- `required-competencies`

Expected body:

- Career heading.
- Profile description.
- `## Required Competencies`

## `macro-skill`

Use for the main note inside each leaf skill folder.

Required properties:

- `type`
- `title`
- `tags`
- `source`

Recommended properties:

- `coverage`
- `competency-count`
- `microskill-count`
- `related-jobs`
- `source-note`

Expected body:

- Macro-skill heading.
- Description.
- `## Competencies`
- `## Microskills`

## `competency`

Use for assessable learning outcomes under a macro skill.

Required properties:

- `type`
- `title`
- `tags`
- `source`
- `parent-macro`
- `bloom-level`
- `bloom-category`

Recommended properties:

- `strict-prerequisites`
- `optional-prerequisites`
- `microskill-count`
- `corresponding-course-competencies`

Expected body:

- Competency heading.
- Parent macro link.
- `## Competency Statement`
- `## Strict Prerequisites`
- `## Optional Prerequisites`
- `## Corresponding Course Competencies`
- `## Microskills`

## `micro-skill`

Use for atomic knowledge, technique, or behavior notes under a macro skill.

Required properties:

- `type`
- `title`
- `tags`
- `source`
- `parent-macro`

Recommended properties:

- `parent-competency`
- `parent-competencies`

Expected body:

- Micro-skill heading.
- Parent macro link.
- Parent competency links when available.
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
- `related-macro-skills`
- `related-competencies`
- `related-microskills`

Expected body:

- Content heading.
- Learning content.
- Links back to supported graph nodes where known.

## `redirect`

Use for alias or compatibility notes that point readers to another canonical note.

Required properties:

- `type`
- `title`
- `tags`

Expected body:

- A clear link to the canonical target.
