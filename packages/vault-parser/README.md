# `@salmon/vault-parser`

Parse an Obsidian vault into a simple in-memory graph:

```ts
import { parseVault } from '@salmon/vault-parser'

const graph = await parseVault('../../vault')

// {
//   nodes: [{ id: 'skills/example/example', path: 'skills/example/example.md' }],
//   edges: [{ from: 'a', to: 'b', rawTarget: 'b', resolved: true }]
// }
```

Node IDs are vault-relative Markdown paths without the `.md` extension. Edges are directed from the source note to each resolved `[[wikilink]]` target.

If files are already loaded, use the in-memory entry point:

```ts
import { parseVaultEntries } from '@salmon/vault-parser'

const graph = parseVaultEntries([
  {
    path: 'skills/example/example.md',
    content: 'See [[skills/other/other|Other]].',
  },
  {
    path: 'skills/other/other.md',
    content: '# Other',
  },
])
```

By default, unresolved wikilinks are skipped. Keep them with:

```ts
const graph = await parseVault('../../vault', { includeUnresolvedEdges: true })
```

Validate a vault with the exported helpers:

```ts
import { validateVault } from '@salmon/vault-parser'

const result = await validateVault('../../vault')

if (!result.valid) {
  console.error(result.errors)
}
```

The package is private for now and licensed under Apache-2.0 as repository tooling.
