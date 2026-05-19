---
type: "ontology-note"
title: "Taxonomy and Coverage"
schema-version: "v1.0"
scope: "vault"
tags:
  - ontology
  - taxonomy
---

# Taxonomy and Coverage

This note defines controlled vocabularies used by the vault schema.

## Skill Taxonomy Paths

Skill taxonomy is path-derived. The folders between `vault/skills/` and the leaf skill folder form the taxonomy path.

Rules:

- Taxonomy paths may be one or more folders deep.
- Do not duplicate taxonomy path segments into fixed frontmatter properties.
- A leaf skill folder is identified by containing `<skill-name>.md`, `competencies/`, and `microskills/`.
- Add or reorganize taxonomy folders by changing the folder path and updating affected links.

## Bloom Levels

Allowed competency Bloom levels:

| Level | Category |
| --- | --- |
| `1` | `Remember` |
| `2` | `Understand` |
| `3` | `Apply` |
| `4` | `Analyze` |
| `5` | `Evaluate` |
| `6` | `Create` |

Rules:

- `bloom-level` must be numeric.
- `bloom-category` must match the level.

## Coverage Values

Allowed macro-skill `coverage` values:

- `Analysis`
- `Apply`
- `Architecture`
- `Calculation`
- `Concept`
- `Design`
- `Evaluation`
- `Explanation`
- `Framework`
- `Implementation`
- `Language`
- `Platform`
- `Production`
- `Productivity`
- `Representation`
- `Theory`
- `Tool`
- `ToolUsage`
- `Transformation`
- `Validation`

Rules:

- `coverage` should be a YAML list.
- Use the smallest set of values that describes the macro skill.
- Add new values only by updating this ontology.

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
- `macro-skill`
- `competency`
- `micro-skill`
- `medium`
- `redirect`

Domain tags may be added, but should not replace the `type` property.
