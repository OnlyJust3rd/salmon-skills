---
type: "ontology-note"
title: "Relationships"
schema-version: "v1.0"
scope: "vault"
tags:
  - ontology
  - relationships
---

# Relationships

Represent relationships in two layers:

- Frontmatter properties for machine-readable queries.
- Wikilinks in the body for Obsidian navigation.

## Course to Macro Skill

Relationship: `course has macro skill`.

Rules:

- Course notes list macro-skill links under `## Macro Skills`.
- Macro-skill notes use `source-note` when the source course note is known.
- `source-note` paths must use `courses/`.

## Macro Skill to Competency

Relationship: `macro skill contains competency`.

Rules:

- Macro-skill notes list competency links under `## Competencies`.
- Competency notes set `parent-macro`.
- Competency body text links back to the parent macro.

## Macro Skill to Micro-skill

Relationship: `macro skill contains micro-skill`.

Rules:

- Macro-skill notes list micro-skill links under `## Microskills`.
- Micro-skill notes set `parent-macro`.
- Micro-skill body text links back to the parent macro.

## Competency to Micro-skill

Relationship: `competency is supported by micro-skill`.

Rules:

- Competency notes list micro-skill links under `## Microskills`.
- Micro-skill notes use `parent-competency` when there is one parent competency.
- Micro-skill notes use `parent-competencies` when there are multiple parent competencies.

## Competency to Competency

Relationship: `competency has prerequisite competency`.

Rules:

- Use `strict-prerequisites` for required prerequisite competencies.
- Use `optional-prerequisites` for helpful but non-required prerequisite competencies.
- Body sections should include wikilinks for prerequisite targets when those targets exist.

## Career to Competency

Relationship: `career requires competency`.

Rules:

- Career notes list required competencies under `## Required Competencies`.
- Use `required-competencies` in frontmatter for machine-readable role requirements.
- Use competency wikilinks in the body for navigation.

## Medium to Graph Node

Relationship: `medium supports learning graph node`.

Rules:

- Medium notes should use `supports` for the most specific supported notes.
- Prefer linking to micro-skills when the content teaches a focused concept.
- Link to competencies when the content supports an outcome.
- Link to macro skills only when the content is broad.

## Base to Entity Type

Relationship: `Base queries entity type`.

Rules:

- Base files should filter by `type` whenever possible.
- Base scope filters should use current top-level folders: `courses`, `skills`, and `careers`.
- Base views should display stable schema properties, not derived text from body sections.
