# SALMON Vault Workflows

## Ontology Files To Load

Use `vault/ontology` with the latest version available:

- `schemas.md`: graph spine and module entrypoint.
- `entity-types.md`: required frontmatter and expected body sections.
- `folder-conventions.md`: canonical paths and taxonomy constraints.
- `properties.md`: property vocabulary and wikilink rules.
- `relationships.md`: relationship semantics.
- `data-quality.md`: validation expectations.
- `templates/*.md`: canonical starting point for each entity type.

## Current Entity Requirements

Follow the live ontology when it changes. As of v1.0.0:

- `skill`: `type`, `title`, `tags`, `contributors`, `competencies`, `standard-competency`, `microskills`.
- `competency`: `type`, `title`, `tags`, `strict-prerequisites`, `miller-level`, `optional-prerequisites`, `parent-skill`, `requires-microskills`, `contributors`.
- `microskill`: `type`, `title`, `tags`, `parent-skill`, `requires-in-competencies`, `contributors`.
- `medium`: `type`, `title`, `tags`, `contributor`, `learning-outcomes`, optional `related-skills`, `learning-time-in-minutes`.
- `career`: `type`, `title`, `level`, `tags`, `contributor`, `required-competencies`.
- `course`: `type`, `title`, `tags`, `course-code`, `course-name`, `domain`, `academic-level`, `source`.
- `contributor`: `type`, `title`, `tags`.

Use lowercase entity type values (`skill`, `competency`, `microskill`) when the ontology requires them.

## Add A Skill Cluster

1. Choose a taxonomy path from `folder-conventions.md`.
2. Create the skill folder with matching leaf note:
   `vault/skills/<taxonomy-path>/<skill-slug>/<skill-slug>.md`.
3. Create `competencies/` and `microskills/` sibling directories.
4. Add at least one competency and its required microskills when the user asks for a complete skill.
5. Fill the skill note's `competencies`, `standard-competency`, and `microskills` lists from the created notes.
6. Keep description concise and put relationship lists in both frontmatter and body sections.

## Add A Competency

1. Filename must start with `L<miller-level>-`.
2. Set `parent-skill` to the owning skill note.
3. Use `strict-prerequisites: []` and `optional-prerequisites: []` when no prerequisites are known.
4. Link all required microskills in `requires-microskills`.
5. Add the competency to the parent skill's `competencies` list.
6. Add it to `standard-competency` only if it is expected for someone claiming the skill.

## Add A Microskill

1. Place in the owning skill's `microskills/` directory.
2. Set `parent-skill` to the owning skill note.
3. Set `requires-in-competencies` to the competencies that need it, or `[]` if the user is drafting an unattached microskill.
4. Add the microskill to the parent skill's `microskills` list.
5. Add it to each competency's `requires-microskills` list when relevant.

## Add A Medium

1. Place at `vault/mediums/<medium-type>/<source>/<medium-slug>.md`.
2. Set `contributor` to one contributor wikilink.
3. Set `learning-outcomes` to one or more most-specific competency or microskill wikilinks.
4. Estimate `learning-time-in-minutes` as a positive integer.
5. Include an `## Learning Outcomes` section linking the same targets.

## Add A Career Or Course

- Career notes belong under `vault/careers/<domain-or-focus-area>/` and should use `## Description`, `## Responsibilities`, and `## Requirements`.
- Course notes belong under `vault/courses/<institution>/<catalog-or-version>/` and should link related skills under `## Skills`.

## Review Checklist

- Required frontmatter exists and uses ontology field names exactly.
- Entity type value matches ontology casing.
- Paths match `folder-conventions.md`.
- Relationship wikilinks are vault-relative and resolve.
- Slugs are lowercase and hyphenated.
- Skill taxonomy appears only in paths, not duplicated as frontmatter.
- Lists use YAML arrays; empty multi-value fields use `[]`.
- Validation passes or blockers are reported clearly.
