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
- Every `type` should be defined in [[entity-types|Entity Types]].
- Required properties for the entity type must be present.
- Wikilinks should point to existing notes unless intentionally used as placeholders.

## Folder Rules

- Course notes must live under `vault/courses/`.
- Career notes must live under `vault/careers/`.
- Skill notes must follow the leaf skill folder pattern in [[folder-conventions#Skills|Skills]].
- Contributor notes must live under `vault/contributors/`.
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

- `<skill-name>.md` must use `type: "skill"`.
- Notes in `competencies/` must use `type: "competency"`.
- Competency filenames must match their `miller-level` prefix: `L<miller-level>-<slug>.md`.
- Notes in `microskills/` must use `type: "microskill"`.
- Skill, competency, and microskill notes must use the exact property sets defined in [[entity-types|Entity Types]].
- Empty Markdown files are invalid graph notes.

## Path Rules

- Use current top-level folder names in links and filters.
- Do not introduce legacy course-folder references.
- Keep path slugs lowercase and hyphenated.
- Use full vault-relative wikilinks in relationship properties.
- Relationship-property wikilinks should include the leaf slug as the alias, for example target `aaa/bbb/ccc/ddd` with alias `ddd`.

## Property Rules

- Controlled values must match [[taxonomy-and-coverage|Taxonomy and Levels]].
- For multi-value fields, use YAML lists.
- Empty multi-value fields should use `[]`.
- Relationship properties should use wikilinks when the target is a graph note.

## Medium Rules

Learning-medium notes should be typed as `medium` when they are part of the graph.

Medium notes should live at `vault/mediums/<medium-type>/<source>/<medium-slug>.md`, where the type captures the format or origin and the source captures the provider, publisher, channel, repository owner, or generating contributor.

Recommended minimum frontmatter:

```yaml
type: "medium"
title: ""
tags:
  - medium
contributor: "[[contributors/<contributor-slug>|<contributor-slug>]]"
learning-outcomes:
  - "[[skills/<taxonomy-path>/<skill-name>/microskills/<microskill-slug>|<microskill-slug>]]"
related-skills:
  - "[[skills/<taxonomy-path>/<skill-name>/<skill-name>|<skill-name>]]"
learning-time-in-minutes: 1
```

## Base Rules

- Base files must parse as valid YAML.
- Base scope filters must use current top-level folders.
- Entity views should filter by `type`.
- Any property referenced in a Base view should be defined in [[properties|Properties]].

## Career Rules

Career notes should use this minimum frontmatter:

```yaml
type: "career"
title: ""
level: "entry-level"
tags:
  - career
contributor: "[[contributors/<contributor-slug>|<contributor-slug>]]"
required-competencies: []
```

Career bodies should include `## Description`, `## Responsibilities`, and `## Requirements`. Link responsibilities and requirements only when there is a plausible matching `competency` or `skill` note.

## Redirect Rules

- Redirect notes must use `type: "redirect"`.
- Redirect notes should point clearly to one canonical target.
- Redirect notes should not be counted as canonical content entities.
