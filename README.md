# SALMON

**Skill-Aligned Learning Map Ontology**

SALMON is an open learning knowledge graph for skills, competencies, microskills, courses, careers, contributors, and learning media. The graph lives in `vault/` as Markdown with YAML frontmatter and Obsidian-style wikilinks.

The goal is to make learning maps interoperable: educators, learners, and developers can connect what someone wants to learn with the skills, prerequisites, career outcomes, and learning resources that support that goal.

## Browse The Vault

Start with [vault/README.md](vault/README.md) for the folder conventions and ontology entrypoints.

Important areas:

- `vault/skills/` contains the skill graph.
- `vault/careers/` maps roles to required competencies.
- `vault/courses/` maps curriculum units to skills and competencies.
- `vault/mediums/` contains learning artifacts that support graph nodes.
- `vault/ontology/v1.0/` defines the schema rules.

You can also run the local explorer:

```sh
pnpm install
pnpm graph
pnpm dev:explorer
```

## Add Content

Read [CONTRIBUTING.md](CONTRIBUTING.md) before adding or moving graph notes.

The short version:

- Add skills under `vault/skills/<taxonomy-path>/<skill-slug>/`.
- Add competencies in the skill folder's `competencies/` directory.
- Add microskills in the skill folder's `microskills/` directory.
- Add learning artifacts under `vault/mediums/<medium-kind>/`.
- Use full vault-relative wikilinks in relationship frontmatter.

## Run Developer Tools

This repository uses pnpm workspaces.

Required versions:

- Node.js `22.13.0`
- pnpm `10.23.0`

Common commands:

```sh
pnpm install
pnpm validate
pnpm test
pnpm lint
pnpm build
```

## Validate Changes

Run validation before opening a pull request:

```sh
pnpm validate
```

Validation checks required frontmatter, known entity types, skill folder structure, and unresolved real wikilinks. Wikilinks inside fenced code blocks and inline code are ignored so teaching examples do not create false graph errors.

## License

SALMON uses a split license:

- Code, tooling, configuration, and documentation outside `vault/` are licensed under the [Apache License 2.0](LICENSES/Apache-2.0.txt).
- Content under `vault/` is licensed under the [Creative Commons Attribution 4.0 International License](LICENSES/CC-BY-4.0.txt).

See [LICENSE.md](LICENSE.md) for details.
