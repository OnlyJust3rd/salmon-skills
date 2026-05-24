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

## Course to Skill

Relationship: `course has skill`.

Rules:

- Course notes list skill links under `## Skills`.
- Skill notes may be linked directly from course bodies.

## Skill to Competency

Relationship: `skill contains competency`.

Rules:

- Skill notes list competency links in `competencies`.
- Skill notes list standard skill-level competency links in `standard-competency`; every value must also appear in `competencies`.
- Skill bodies list competency links under `## Competencies`.
- Competency notes set `parent-skill`.

## Skill to Microskill

Relationship: `skill contains microskill`.

Rules:

- Skill notes list microskill links in `microskills`.
- Skill bodies list microskill links under `## Microskills`.
- Microskill notes set `parent-skill`.

## Competency to Microskill

Relationship: `competency requires microskill`.

Rules:

- Competency notes list microskill links in `requires-microskills`.
- Microskill notes may list inverse competency links in `requires-in-competencies`.
- When `requires-in-competencies` exists, each item must be a valid wikilink to a competency note.

## Competency to Competency

Relationship: `competency has prerequisite competency`.

Rules:

- Use `strict-prerequisites` for required prerequisite competencies.
- Use `optional-prerequisites` for helpful but non-required prerequisite competencies.
- Prerequisite values must be full-path wikilinks.

## Contributor to Graph Node

Relationship: `contributor contributed to graph node`.

Rules:

- Skill, competency, and microskill notes list contributor wikilinks in `contributors`.
- Career and medium notes list one contributor wikilink in `contributor`.
- Contributor notes live under `vault/contributors/`.

## Career to Competency

Relationship: `career requires competency`.

Rules:

- Career notes list linked role requirements under `## Requirements`.
- Use `required-competencies` in frontmatter for machine-readable role requirements.
- `required-competencies` values should link to `competency` notes when the requirement is specific, or to `skill` notes when the requirement is broader than one competency.

## Medium to Graph Node

Relationship: `medium has learning outcome`.

Rules:

- Medium notes should use `outcome` for the most specific supported note.
- Prefer linking to microskills when the content teaches a focused concept.
- Link to competencies when the content supports an outcome.

## Base to Entity Type

Relationship: `Base queries entity type`.

Rules:

- Base files should filter by `type` whenever possible.
- Base scope filters should use current top-level folders.
- Base views should display stable schema properties, not derived text from body sections.
