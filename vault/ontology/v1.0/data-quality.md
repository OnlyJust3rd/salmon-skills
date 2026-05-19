---
type: "ontology-note"
title: "Data Quality"
schema-version: "v1.0"
scope: "vault"
tags:
  - ontology
  - validation
---

# Data Quality

This note defines validation rules. It should not store one-time audit totals.

## General Rules

- Every graph note should have valid YAML frontmatter.
- Every graph note should have a `type`.
- Every `type` should be defined in [[ontology/v1.0/entity-types|Entity Types]].
- Required properties for the entity type must be present.
- Wikilinks should point to existing notes unless intentionally used as placeholders.

## Folder Rules

- Course notes must live under `vault/courses/`.
- Career notes must live under `vault/careers/`.
- Skill notes must follow the leaf skill folder pattern in [[ontology/v1.0/folder-conventions#Skills|Skills]].
- Medium notes should live under `vault/mediums/`.
- Ontology notes must not be mixed into content folders.

## Skill Structure Rules

Each leaf skill folder must contain:

```text
<skill-name>.md
competencies/
microskills/
```

Rules:

- `<skill-name>.md` must use `type: "macro-skill"`.
- Notes in `competencies/` must use `type: "competency"`.
- Notes in `microskills/` must use `type: "micro-skill"`.
- Empty Markdown files are invalid graph notes.

## Path Rules

- Use `courses/` in links, filters, and `source-note` values.
- Do not introduce legacy course-folder references.
- Keep path slugs lowercase and hyphenated.

## Property Rules

- Controlled values must match [[ontology/v1.0/taxonomy-and-coverage|Taxonomy and Coverage]].
- Count properties are derived metadata, not canonical truth.
- If derived counts disagree with links or folder contents, regenerate the counts.
- For multi-value fields, use YAML lists.

## Medium Rules

Learning-medium notes should be typed as `medium` when they are part of the graph.

Recommended minimum frontmatter:

```yaml
type: "medium"
title: ""
tags:
  - medium
medium-kind: ""
source: ""
supports: []
```

## Base Rules

- Base files must parse as valid YAML.
- Base scope filters must use current top-level folders.
- Entity views should filter by `type`.
- Any property referenced in a Base view should be defined in [[ontology/v1.0/properties|Properties]].

## Redirect Rules

- Redirect notes must use `type: "redirect"`.
- Redirect notes should point clearly to one canonical target.
- Redirect notes should not be counted as canonical content entities.
