---
type: ontology-note
title: Properties
schema-version: v1.0.0
scope: vault
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
| `contributors` | List | Wikilinks to contributor notes. |
| `schema-version` | Text | Optional schema version for ontology-managed notes. |

## Course Properties

| Property | Type | Rule |
| --- | --- | --- |
| `course-code` | Text | Course identifier. |
| `course-name` | Text | Course title. |
| `domain` | Text | Academic or professional domain. |
| `academic-level` | Text | Controlled value from [[ontology/v1.0/taxonomy-and-coverage#Academic Levels|Academic Levels]]. |
| `source` | Text | Upstream source label or generation source. |

## Career Properties

| Property | Type | Rule |
| --- | --- | --- |
| `job-title` | Text | Role title. |
| `focus-area` | Text | Career family. |
| `source` | Text | Upstream source label or generation source. |
| `required-competency-count` | Number | Optional derived count retained for career notes. |
| `required-competencies` | List | Required competency labels or links. |

## Skill Properties

| Property | Type | Rule |
| --- | --- | --- |
| `competencies` | List | Wikilinks to competency notes owned by the skill. |
| `standard-competency` | List | Subset of `competencies` representing the expected competency level for someone claiming the skill. Prefer Miller level `2` or higher when available. |
| `microskills` | List | Wikilinks to microskill notes owned by the skill. |

## Competency Properties

| Property | Type | Rule |
| --- | --- | --- |
| `strict-prerequisites` | List | Wikilinks to required prerequisite competencies. |
| `miller-level` | Number | Controlled value from [[ontology/v1.0/taxonomy-and-coverage#Miller Levels|Miller Levels]]. |
| `optional-prerequisites` | List | Wikilinks to helpful prerequisite competencies. |
| `parent-skill` | Text | Wikilink to the owning skill note. |
| `requires-microskills` | List | Wikilinks to microskills required by the competency. |

## Microskill Properties

| Property | Type | Rule |
| --- | --- | --- |
| `parent-skill` | Text | Wikilink to the owning skill note. |
| `requires-in-competencies` | List | Wikilinks to competencies that require the microskill. |

## Medium Properties

| Property | Type | Rule |
| --- | --- | --- |
| `medium-kind` | Text | Kind of learning artifact. |
| `source` | Text | Upstream source label or generation source. |
| `supports` | List | Wikilinks or stable paths to supported graph notes. |
| `related-competencies` | List | Related competencies. |
| `related-microskills` | List | Related microskills. |

## Taxonomy Rule

Skill taxonomy is derived from folder paths, not duplicated in frontmatter. Do not add fixed-depth taxonomy properties for skill grouping; use the path under `vault/skills/` when grouping or querying by taxonomy.

## Wikilink Alias Rule

Relationship-property wikilinks must use full vault-relative targets and the target leaf slug as the alias, for example target `aaa/bbb/ccc/ddd` with alias `ddd`.
