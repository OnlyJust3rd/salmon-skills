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
| `icon` | Text | Optional display icon. Required for `skill`, `competency`, `microskill`, `contributor`, and `waypoint` notes. |
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
| `level` | Text | Career seniority or corporate level, for example `Associate`, `Junior`, `Mid`, `Senior`, `Lead`, `fellowship`, `L0`, `L1`, or `entry-level`. |
| `contributor` | Text | Wikilink to the contributor note for the career profile. |
| `required-competencies` | List | Wikilinks to required `competency` notes, or to `skill` notes when the requirement is broader than one competency. |

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
| `contributor` | Text | Wikilink to the contributor note for the medium. |
| `outcome` | Text | Wikilink to one `competency` or `microskill` note that the medium teaches or supports. |
| `learning-time-in-minutes` | Number | Positive integer estimate of expected learning time in minutes. |

## Taxonomy Rule

Skill taxonomy is derived from folder paths and must not be duplicated in frontmatter. Do not add fixed-depth or faceted taxonomy properties such as `domain`, `subdomain`, `capability-area`, `skill-kind`, `source-path`, or `migration-status`; use the path under `vault/skills/` when grouping or querying by taxonomy.

## Wikilink Alias Rule

Relationship-property wikilinks must use full vault-relative targets and the target leaf slug as the alias, for example target `aaa/bbb/ccc/ddd` with alias `ddd`.
