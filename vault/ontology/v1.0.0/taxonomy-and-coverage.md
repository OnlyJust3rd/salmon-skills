---
type: "ontology-note"
title: "Taxonomy and Levels"
schema-version: "v1.0"
scope: "vault"
tags:
  - ontology
  - taxonomy
---

# Taxonomy and Levels

This note defines controlled vocabularies used by the vault schema.

## Skill Taxonomy Paths

Skill taxonomy is path-derived. The folders between `vault/skills/` and the leaf skill folder form the taxonomy path.

Rules:

- Taxonomy paths may be one or more folders deep.
- Do not duplicate taxonomy path segments into fixed frontmatter properties.
- A leaf skill folder is identified by containing `<skill-name>.md`, `competencies/`, and `microskills/`.
- Add or reorganize taxonomy folders by changing the folder path and updating affected links.

## Miller Levels

Allowed competency `miller-level` values:

| Level | Meaning |
| --- | --- |
| `1` | Knows |
| `2` | Knows how |
| `3` | Shows how |
| `4` | Does |

Rules:

- `miller-level` must be an integer from `1` to `4`.
- Use the level that best represents the assessment expectation of the competency.

## Academic Levels

Allowed `academic-level` values:

- `introductory`
- `intermediate`
- `advanced`
- `undergraduate`
- `graduate`

## Course Domains

Course `domain` values should be stable title-case labels. Add or revise domain labels here before using them broadly.

## Tags

Entity tags should mirror the entity type where useful:

- `course`
- `career`
- `Skill`
- `Competency`
- `Microskill`
- `medium`
- `contributor`
- `redirect`

Domain tags may be added, but should not replace the `type` property.
