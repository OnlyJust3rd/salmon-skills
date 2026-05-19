---
type: "ontology-note"
title: "Properties"
schema-version: "v1.0"
scope: "vault"
tags:
  - ontology
  - properties
---

# Properties

This note defines the frontmatter vocabulary for graph notes.

## Core Properties

| Property | Type | Rule |
| --- | --- | --- |
| `type` | Text | Required entity type. |
| `title` | Text | Human-readable title. |
| `tags` | List | Obsidian tags for broad discovery. |
| `source` | Text | Upstream source label or generation source. |
| `schema-version` | Text | Optional schema version for ontology-managed notes. |

## Course Properties

| Property | Type | Rule |
| --- | --- | --- |
| `course-code` | Text | Course identifier. |
| `course-name` | Text | Course title. |
| `domain` | Text | Academic or professional domain. |
| `academic-level` | Text | Controlled value from [[ontology/v1.0/taxonomy-and-coverage#Academic Levels|Academic Levels]]. |
| `macro-skill-count` | Number | Optional derived count. |

## Career Properties

| Property | Type | Rule |
| --- | --- | --- |
| `job-title` | Text | Role title. |
| `focus-area` | Text | Career family. |
| `required-competency-count` | Number | Optional derived count. |
| `required-competencies` | List | Required competency labels. |

## Skill Properties

| Property | Type | Rule |
| --- | --- | --- |
| `parent-macro` | Text | Parent macro-skill title. |
| `parent-competency` | Text | Single parent competency title. |
| `parent-competencies` | List | Multiple parent competency titles. |
| `competency-count` | Number | Optional derived count. |
| `microskill-count` | Number | Optional derived count. |
| `related-jobs` | List | Career titles connected to a macro skill. |
| `source-note` | Text | Path to source note. Must use `courses/` for course paths. |

## Competency Properties

| Property | Type | Rule |
| --- | --- | --- |
| `bloom-level` | Number | Controlled value from [[ontology/v1.0/taxonomy-and-coverage#Bloom Levels|Bloom Levels]]. |
| `bloom-category` | Text | Controlled value paired with `bloom-level`. |
| `strict-prerequisites` | List | Required prerequisite competency labels. |
| `optional-prerequisites` | List | Helpful prerequisite competency labels. |
| `corresponding-course-competencies` | List | Source course outcome alignments. |

## Macro-skill Coverage Properties

| Property | Type | Rule |
| --- | --- | --- |
| `coverage` | List | Controlled values from [[ontology/v1.0/taxonomy-and-coverage#Coverage Values|Coverage Values]]. |

## Medium Properties

| Property | Type | Rule |
| --- | --- | --- |
| `medium-kind` | Text | Kind of learning artifact. |
| `supports` | List | Wikilinks or stable paths to supported graph notes. |
| `related-macro-skills` | List | Broad related macro skills. |
| `related-competencies` | List | Related competencies. |
| `related-microskills` | List | Related micro-skills. |

## Derived Count Rule

Count properties may exist for convenience, but they are not schema authority. When a count conflicts with linked notes or folder contents, regenerate the count from the graph.

## Taxonomy Rule

Skill taxonomy is derived from folder paths, not duplicated in frontmatter. Do not add fixed-depth taxonomy properties for skill grouping; use the path under `vault/skills/` when grouping or querying by taxonomy.
