import assert from 'node:assert/strict'
import { test } from 'node:test'
import { buildLearningPaths, filterLearningPathGoals } from './graph.ts'
import type { VaultEdge, VaultNode } from './types.ts'

function node(id: string, type: string, frontmatter: Record<string, unknown> = {}): VaultNode {
  return {
    id,
    path: `${id}.md`,
    frontmatter: {
      type,
      title: id,
      ...frontmatter,
    },
  }
}

test('builds a start-to-goal prerequisite path for a competency goal', () => {
  const nodes = [
    node('competencies/L1-root', 'competency', { 'miller-level': 1 }),
    node('competencies/L2-middle', 'competency', {
      'strict-prerequisites': ['[[competencies/L1-root|L1 Root]]'],
    }),
    node('competencies/L3-goal', 'competency', {
      'strict-prerequisites': ['[[competencies/L2-middle|L2 Middle]]'],
    }),
  ]
  const edges: VaultEdge[] = [
    { from: 'competencies/L2-middle', to: 'competencies/L1-root', rawTarget: 'competencies/L1-root', resolved: true },
    { from: 'competencies/L3-goal', to: 'competencies/L2-middle', rawTarget: 'competencies/L2-middle', resolved: true },
  ]

  const result = buildLearningPaths(nodes, edges, ['competencies/L3-goal'])

  assert.deepEqual(result.paths[0]?.steps.map((step) => step.node.id), [
    'competencies/L1-root',
    'competencies/L2-middle',
    'competencies/L3-goal',
  ])
})

test('expands a skill goal through standard competency before querying prerequisites', () => {
  const nodes = [
    node('skills/cache', 'skill', { 'standard-competency': ['[[competencies/L2-cache|L2 Cache]]'] }),
    node('competencies/L1-root', 'competency', { 'miller-level': 1 }),
    node('competencies/L2-cache', 'competency', {
      'strict-prerequisites': ['[[competencies/L1-root|L1 Root]]'],
    }),
  ]
  const edges: VaultEdge[] = [
    { from: 'skills/cache', to: 'competencies/L2-cache', rawTarget: 'competencies/L2-cache', resolved: true },
    { from: 'competencies/L2-cache', to: 'competencies/L1-root', rawTarget: 'competencies/L1-root', resolved: true },
  ]

  const result = buildLearningPaths(nodes, edges, ['skills/cache'])

  assert.equal(result.paths[0]?.sourceGoal.id, 'skills/cache')
  assert.equal(result.paths[0]?.targetCompetency.id, 'competencies/L2-cache')
  assert.deepEqual(result.paths[0]?.steps.map((step) => step.node.id), ['competencies/L1-root', 'competencies/L2-cache'])
})

test('expands a career goal through required competencies', () => {
  const nodes = [
    node('careers/backend-developer', 'career', {
      'required-competencies': ['[[competencies/L2-api|L2 API]]', '[[competencies/L2-database|L2 Database]]'],
    }),
    node('competencies/L1-root', 'competency', { 'miller-level': 1 }),
    node('competencies/L2-api', 'competency', {
      'strict-prerequisites': ['[[competencies/L1-root|L1 Root]]'],
    }),
    node('competencies/L2-database', 'competency', {
      'strict-prerequisites': ['[[competencies/L1-root|L1 Root]]'],
    }),
  ]
  const edges: VaultEdge[] = [
    { from: 'careers/backend-developer', to: 'competencies/L2-api', rawTarget: 'competencies/L2-api', resolved: true },
    { from: 'careers/backend-developer', to: 'competencies/L2-database', rawTarget: 'competencies/L2-database', resolved: true },
    { from: 'competencies/L2-api', to: 'competencies/L1-root', rawTarget: 'competencies/L1-root', resolved: true },
    { from: 'competencies/L2-database', to: 'competencies/L1-root', rawTarget: 'competencies/L1-root', resolved: true },
  ]

  const result = buildLearningPaths(nodes, edges, ['careers/backend-developer'])

  assert.deepEqual(
    result.paths.map((path) => path.targetCompetency.id),
    ['competencies/L2-api', 'competencies/L2-database'],
  )
  assert.deepEqual(result.paths[0]?.steps.map((step) => step.node.id), ['competencies/L1-root', 'competencies/L2-api'])
})

test('dedupes shared prerequisites while preserving dependency order', () => {
  const nodes = [
    node('competencies/L1-root', 'competency', { 'miller-level': 1 }),
    node('competencies/L2-a', 'competency', { 'strict-prerequisites': ['[[competencies/L1-root]]'] }),
    node('competencies/L2-b', 'competency', { 'strict-prerequisites': ['[[competencies/L1-root]]'] }),
    node('competencies/L3-goal', 'competency', {
      'strict-prerequisites': ['[[competencies/L2-a]]', '[[competencies/L2-b]]'],
    }),
  ]
  const edges: VaultEdge[] = [
    { from: 'competencies/L2-a', to: 'competencies/L1-root', rawTarget: 'competencies/L1-root', resolved: true },
    { from: 'competencies/L2-b', to: 'competencies/L1-root', rawTarget: 'competencies/L1-root', resolved: true },
    { from: 'competencies/L3-goal', to: 'competencies/L2-a', rawTarget: 'competencies/L2-a', resolved: true },
    { from: 'competencies/L3-goal', to: 'competencies/L2-b', rawTarget: 'competencies/L2-b', resolved: true },
  ]

  const result = buildLearningPaths(nodes, edges, ['competencies/L3-goal'])

  assert.deepEqual(result.paths[0]?.steps.map((step) => step.node.id), [
    'competencies/L1-root',
    'competencies/L2-a',
    'competencies/L2-b',
    'competencies/L3-goal',
  ])
})

test('groups prerequisite paths into dependency layers', () => {
  const nodes = [
    node('competencies/L1-root', 'competency', { 'miller-level': 1 }),
    node('competencies/L2-a', 'competency', { 'strict-prerequisites': ['[[competencies/L1-root]]'] }),
    node('competencies/L2-b', 'competency', { 'strict-prerequisites': ['[[competencies/L1-root]]'] }),
    node('competencies/L3-goal', 'competency', {
      'strict-prerequisites': ['[[competencies/L2-a]]', '[[competencies/L2-b]]'],
    }),
  ]
  const edges: VaultEdge[] = [
    { from: 'competencies/L2-a', to: 'competencies/L1-root', rawTarget: 'competencies/L1-root', resolved: true },
    { from: 'competencies/L2-b', to: 'competencies/L1-root', rawTarget: 'competencies/L1-root', resolved: true },
    { from: 'competencies/L3-goal', to: 'competencies/L2-a', rawTarget: 'competencies/L2-a', resolved: true },
    { from: 'competencies/L3-goal', to: 'competencies/L2-b', rawTarget: 'competencies/L2-b', resolved: true },
  ]

  const result = buildLearningPaths(nodes, edges, ['competencies/L3-goal'])

  assert.deepEqual(
    result.paths[0]?.layers.map((layer) => ({
      level: layer.level,
      ids: layer.steps.map((step) => step.node.id),
    })),
    [
      { level: 0, ids: ['competencies/L1-root'] },
      { level: 1, ids: ['competencies/L2-a', 'competencies/L2-b'] },
      { level: 2, ids: ['competencies/L3-goal'] },
    ],
  )
  assert.deepEqual(result.paths[0]?.steps.map((step) => step.depth), [0, 1, 1, 2])
})

test('adds layers to each required competency path for career goals', () => {
  const nodes = [
    node('careers/backend-developer', 'career', {
      'required-competencies': ['[[competencies/L2-api]]', '[[competencies/L1-debugging]]'],
    }),
    node('competencies/L1-root', 'competency', { 'miller-level': 1 }),
    node('competencies/L1-debugging', 'competency', { 'miller-level': 1 }),
    node('competencies/L2-api', 'competency', {
      'strict-prerequisites': ['[[competencies/L1-root]]'],
    }),
  ]
  const edges: VaultEdge[] = [
    { from: 'careers/backend-developer', to: 'competencies/L2-api', rawTarget: 'competencies/L2-api', resolved: true },
    {
      from: 'careers/backend-developer',
      to: 'competencies/L1-debugging',
      rawTarget: 'competencies/L1-debugging',
      resolved: true,
    },
    { from: 'competencies/L2-api', to: 'competencies/L1-root', rawTarget: 'competencies/L1-root', resolved: true },
  ]

  const result = buildLearningPaths(nodes, edges, ['careers/backend-developer'])

  assert.deepEqual(
    result.paths.map((path) => path.layers.map((layer) => layer.steps.map((step) => step.node.id))),
    [[['competencies/L1-root'], ['competencies/L2-api']], [['competencies/L1-debugging']]],
  )
})

test('reports unsupported goals and enforces the sixteen goal limit', () => {
  const nodes = Array.from({ length: 17 }, (_, index) => node(`mediums/${index}`, 'medium'))

  const result = buildLearningPaths(
    nodes,
    [],
    nodes.map((item) => item.id),
  )

  assert.equal(result.warnings.some((warning) => warning.includes('Only the first 16 goals')), true)
  assert.equal(result.warnings.filter((warning) => warning.includes('is not a supported learning path goal')).length, 16)
})

test('filters learning path goals to competencies and skills with standard competencies', () => {
  const nodes = [
    node('skills/system-design', 'skill', { 'standard-competency': ['[[competencies/L2-system-design]]'] }),
    node('skills/no-standard', 'skill'),
    node('competencies/L2-system-design', 'competency'),
    node('careers/system-architect', 'career', { 'required-competencies': ['[[competencies/L2-system-design]]'] }),
    node('mediums/system-design-video', 'medium'),
  ]

  const result = filterLearningPathGoals(nodes, 'system', 'all')

  assert.deepEqual(
    result.map((item) => item.id),
    ['skills/system-design', 'competencies/L2-system-design', 'careers/system-architect'],
  )
})
