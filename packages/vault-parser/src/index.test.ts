import assert from 'node:assert/strict'
import { test } from 'node:test'
import { parseVault, parseVaultEntries, validateGraph } from './index.js'

test('parseVaultEntries returns path-keyed nodes and resolved wikilink edges', () => {
  const graph = parseVaultEntries([
    {
      path: 'skills/programming/javascript.md',
      content:
        '---\ntype: "skill"\ntags:\n  - programming\n  - javascript\ncount: 2\nempty-list: []\n---\nSee [[skills/programming/functions|Functions]] and [[loops#Basics]].',
    },
    {
      path: 'skills/programming/functions.md',
      content: '# Functions',
    },
    {
      path: 'skills/programming/loops.md',
      content: '# Loops',
    },
  ])

  assert.deepEqual(graph.nodes, [
    {
      id: 'skills/programming/javascript',
      path: 'skills/programming/javascript.md',
      absolutePath: undefined,
      frontmatter: {
        type: 'skill',
        tags: ['programming', 'javascript'],
        count: 2,
        'empty-list': [],
      },
    },
    {
      id: 'skills/programming/functions',
      path: 'skills/programming/functions.md',
      absolutePath: undefined,
      frontmatter: {},
    },
    {
      id: 'skills/programming/loops',
      path: 'skills/programming/loops.md',
      absolutePath: undefined,
      frontmatter: {},
    },
  ])

  assert.deepEqual(graph.edges, [
    {
      from: 'skills/programming/javascript',
      to: 'skills/programming/functions',
      rawTarget: 'skills/programming/functions|Functions',
      resolved: true,
    },
    {
      from: 'skills/programming/javascript',
      to: 'skills/programming/loops',
      rawTarget: 'loops#Basics',
      resolved: true,
    },
  ])
})

test('parseVaultEntries skips unresolved wikilinks by default', () => {
  const graph = parseVaultEntries([
    {
      path: 'a.md',
      content: 'See [[missing]].',
    },
  ])

  assert.deepEqual(graph.edges, [])
})

test('parseVault can ignore explicit vault-relative files', async () => {
  const { mkdir, mkdtemp, rm, writeFile } = await import('node:fs/promises')
  const { tmpdir } = await import('node:os')
  const path = await import('node:path')

  const vaultRoot = await mkdtemp(path.join(tmpdir(), 'vault-parser-'))

  try {
    await mkdir(path.join(vaultRoot, 'skills'), { recursive: true })
    await writeFile(path.join(vaultRoot, 'skills', 'README.md'), '# Ignore me', 'utf8')
    await writeFile(path.join(vaultRoot, 'skills', 'a.md'), 'See [[README]].', 'utf8')

    const graph = await parseVault(vaultRoot, { ignoredFiles: ['skills/README.md'] })

    assert.deepEqual(
      graph.nodes.map((node) => node.id),
      ['skills/a'],
    )
    assert.deepEqual(graph.edges, [])
  } finally {
    await rm(vaultRoot, { recursive: true, force: true })
  }
})

test('parseVault only parses default target folders', async () => {
  const { mkdir, mkdtemp, rm, writeFile } = await import('node:fs/promises')
  const { tmpdir } = await import('node:os')
  const path = await import('node:path')

  const vaultRoot = await mkdtemp(path.join(tmpdir(), 'vault-parser-'))

  try {
    await mkdir(path.join(vaultRoot, 'skills'), { recursive: true })
    await mkdir(path.join(vaultRoot, 'contributors'), { recursive: true })
    await mkdir(path.join(vaultRoot, 'ontology'), { recursive: true })
    await writeFile(path.join(vaultRoot, 'skills', 'a.md'), '# A', 'utf8')
    await writeFile(path.join(vaultRoot, 'contributors', 'just3rd.md'), '# just3rd', 'utf8')
    await writeFile(path.join(vaultRoot, 'README.md'), '# Root', 'utf8')
    await writeFile(path.join(vaultRoot, 'ontology', 'schema.md'), '# Schema', 'utf8')

    const graph = await parseVault(vaultRoot)

    assert.deepEqual(
      graph.nodes.map((node) => node.id),
      ['contributors/just3rd', 'skills/a'],
    )
  } finally {
    await rm(vaultRoot, { recursive: true, force: true })
  }
})

test('parseVault accepts custom parse targets', async () => {
  const { mkdir, mkdtemp, rm, writeFile } = await import('node:fs/promises')
  const { tmpdir } = await import('node:os')
  const path = await import('node:path')

  const vaultRoot = await mkdtemp(path.join(tmpdir(), 'vault-parser-'))

  try {
    await mkdir(path.join(vaultRoot, 'ontology'), { recursive: true })
    await writeFile(path.join(vaultRoot, 'ontology', 'schema.md'), '# Schema', 'utf8')

    const graph = await parseVault(vaultRoot, { parseTargets: ['ontology'] })

    assert.deepEqual(
      graph.nodes.map((node) => node.id),
      ['ontology/schema'],
    )
  } finally {
    await rm(vaultRoot, { recursive: true, force: true })
  }
})

test('parseVaultEntries can keep unresolved wikilink edges', () => {
  const graph = parseVaultEntries(
    [
      {
        path: 'a.md',
        content: 'See [[missing]].',
      },
    ],
    { includeUnresolvedEdges: true },
  )

  assert.deepEqual(graph.edges, [
    {
      from: 'a',
      to: 'missing',
      rawTarget: 'missing',
      resolved: false,
    },
  ])
})

test('parseVaultEntries ignores wikilinks inside fenced and inline code', () => {
  const graph = parseVaultEntries(
    [
      {
        path: 'a.md',
        content: 'Use `[[not-a-link]]` here.\n\n```ts\nconst value = [[also-not-a-link]]\n```\n\nSee [[b]].',
      },
      {
        path: 'b.md',
        content: '# B',
      },
    ],
    { includeUnresolvedEdges: true },
  )

  assert.deepEqual(graph.edges, [
    {
      from: 'a',
      to: 'b',
      rawTarget: 'b',
      resolved: true,
    },
  ])
})

test('validateGraph reports required frontmatter and unknown types', () => {
  const graph = parseVaultEntries([
    {
      path: 'contributors/missing-title.md',
      content: '---\ntype: "contributor"\ntags:\n  - contributor\n---\n# Missing title',
    },
    {
      path: 'careers/example.md',
      content: '---\ntype: "mystery"\ntitle: "Mystery"\ntags: []\n---\n# Mystery',
    },
  ])

  const result = validateGraph(graph)

  assert.equal(result.valid, false)
  assert.ok(result.errors.some((issue) => issue.code === 'MISSING_REQUIRED_PROPERTY'))
  assert.ok(result.errors.some((issue) => issue.code === 'UNKNOWN_TYPE'))
})

test('validateGraph reports invalid skill folder structure', () => {
  const graph = parseVaultEntries([
    {
      path: 'skills/programming/python.md',
      content:
        '---\ntype: "skill"\ntitle: "Python"\ntags: []\ncontributors: []\ncompetencies: []\nstandard-competency: []\nmicroskills: []\n---\n# Python',
    },
    {
      path: 'skills/programming/python/L1-python.md',
      content:
        '---\ntype: "competency"\ntitle: "L1 Python"\ntags: []\nstrict-prerequisites: []\nmiller-level: 1\noptional-prerequisites: []\nparent-skill: "[[skills/programming/python/python|python]]"\nrequires-microskills: []\ncontributors: []\n---\n# L1 Python',
    },
  ])

  const result = validateGraph(graph)

  assert.equal(result.valid, false)
  assert.ok(result.errors.some((issue) => issue.code === 'INVALID_SKILL_LOCATION'))
  assert.ok(result.errors.some((issue) => issue.code === 'INVALID_COMPETENCY_LOCATION'))
})

test('validateGraph reports unresolved wikilinks', () => {
  const graph = parseVaultEntries(
    [
      {
        path: 'contributors/just3rd.md',
        content: '---\ntype: "contributor"\ntitle: "just3rd"\ntags: []\n---\nSee [[missing]].',
      },
    ],
    { includeUnresolvedEdges: true },
  )

  const result = validateGraph(graph)

  assert.equal(result.valid, false)
  assert.ok(result.errors.some((issue) => issue.code === 'UNRESOLVED_WIKILINK'))
})
