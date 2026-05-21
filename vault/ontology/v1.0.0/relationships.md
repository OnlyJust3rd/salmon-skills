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
- Microskill notes list inverse competency links in `requires-in-competencies`.

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
- Contributor notes live under `vault/contributors/`.

## Career to Competency

Relationship: `career requires competency`.

Rules:

- Career notes list required competencies under `## Required Competencies`.
- Use `required-competencies` in frontmatter for machine-readable role requirements.

## Medium to Graph Node

Relationship: `medium supports learning graph node`.

Rules:

- Medium notes should use `supports` for the most specific supported notes.
- Prefer linking to microskills when the content teaches a focused concept.
- Link to competencies when the content supports an outcome.

## Base to Entity Type

Relationship: `Base queries entity type`.

Rules:

- Base files should filter by `type` whenever possible.
- Base scope filters should use current top-level folders.
- Base views should display stable schema properties, not derived text from body sections.
