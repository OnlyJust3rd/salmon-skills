import type { VaultEdge, VaultNode } from './types'

export const emptyNodes: VaultNode[] = []
export const emptyEdges: VaultEdge[] = []
const maxLearningPathGoals = 16

export interface LearningPathStep {
  node: VaultNode
  depth: number
  isGoal: boolean
}

export interface LearningPathLayer {
  level: number
  steps: LearningPathStep[]
}

export interface LearningPath {
  sourceGoal: VaultNode
  targetCompetency: VaultNode
  steps: LearningPathStep[]
  layers: LearningPathLayer[]
}

export interface LearningPathResult {
  paths: LearningPath[]
  warnings: string[]
}

export function getType(node: VaultNode): string {
  const value = node.frontmatter.type
  return typeof value === 'string' && value ? value : 'unknown'
}

export function getTitle(node: VaultNode): string {
  const value = node.frontmatter.title
  if (typeof value === 'string' && value) return value
  return node.id.split('/').at(-1) ?? node.id
}

export function countByType(nodes: VaultNode[]): Record<string, number> {
  return nodes.reduce<Record<string, number>>((counts, node) => {
    const type = getType(node)
    counts[type] = (counts[type] ?? 0) + 1
    return counts
  }, {})
}

export function filterNodes(nodes: VaultNode[], query: string, typeFilter: string): VaultNode[] {
  const normalizedQuery = query.trim().toLowerCase()

  return nodes.filter((node) => {
    const title = getTitle(node).toLowerCase()
    const type = getType(node)
    const matchesType = typeFilter === 'all' || type === typeFilter
    const matchesQuery =
      !normalizedQuery ||
      title.includes(normalizedQuery) ||
      node.id.toLowerCase().includes(normalizedQuery) ||
      node.path.toLowerCase().includes(normalizedQuery)

    return matchesType && matchesQuery
  })
}

export function filterLearningPathGoals(nodes: VaultNode[], query: string, typeFilter: string): VaultNode[] {
  return filterNodes(nodes, query, typeFilter).filter(isLearningPathGoal)
}

export function indexNodesById(nodes: VaultNode[]): Map<string, VaultNode> {
  return new Map(nodes.map((node) => [node.id, node]))
}

export function getOutgoingEdges(edges: VaultEdge[], selectedNode: VaultNode | undefined) {
  if (!selectedNode) return []
  return edges.filter((edge) => edge.from === selectedNode.id)
}

export function isLearningPathGoal(node: VaultNode): boolean {
  const type = getType(node)
  if (type === 'competency') return true
  if (type === 'skill') return getLinkedValues(node.frontmatter['standard-competency']).length > 0
  if (type === 'career') return getLinkedValues(node.frontmatter['required-competencies']).length > 0
  return false
}

export function buildLearningPaths(nodes: VaultNode[], edges: VaultEdge[], goalIds: string[]): LearningPathResult {
  const nodesById = indexNodesById(nodes)
  const outgoingEdgesById = indexOutgoingEdges(edges)
  const warnings: string[] = []
  const limitedGoalIds = [...new Set(goalIds)].slice(0, maxLearningPathGoals)

  if (goalIds.length > maxLearningPathGoals) {
    warnings.push(`Only the first ${maxLearningPathGoals} goals are included.`)
  }

  const paths = limitedGoalIds.flatMap((goalId) => {
    const sourceGoal = nodesById.get(goalId)

    if (!sourceGoal) {
      warnings.push(`${goalId} was not found in the graph.`)
      return []
    }

    const targetCompetencies = getTargetCompetencies(sourceGoal, nodesById, outgoingEdgesById)

    if (targetCompetencies.length === 0) {
      warnings.push(`${getTitle(sourceGoal)} is not a supported learning path goal.`)
      return []
    }

    return targetCompetencies.map((targetCompetency) => {
      const ordered = new Map<string, LearningPathStep>()
      const visiting = new Set<string>()

      visitPrerequisites(targetCompetency, {
        nodesById,
        outgoingEdgesById,
        ordered,
        visiting,
        warnings,
        goalId: targetCompetency.id,
      })

      const steps = [...ordered.values()]

      return {
        sourceGoal,
        targetCompetency,
        steps,
        layers: groupStepsIntoLayers(steps),
      }
    })
  })

  return { paths, warnings }
}

function getTargetCompetencies(
  sourceGoal: VaultNode,
  nodesById: Map<string, VaultNode>,
  outgoingEdgesById: Map<string, VaultEdge[]>,
): VaultNode[] {
  if (getType(sourceGoal) === 'competency') return [sourceGoal]
  if (getType(sourceGoal) === 'career') {
    return getLinkedNodes(sourceGoal, 'required-competencies', nodesById, outgoingEdgesById).filter(
      (node) => getType(node) === 'competency',
    )
  }

  if (getType(sourceGoal) !== 'skill') return []

  return getLinkedNodes(sourceGoal, 'standard-competency', nodesById, outgoingEdgesById).filter(
    (node) => getType(node) === 'competency',
  )
}

interface VisitContext {
  nodesById: Map<string, VaultNode>
  outgoingEdgesById: Map<string, VaultEdge[]>
  ordered: Map<string, LearningPathStep>
  visiting: Set<string>
  warnings: string[]
  goalId: string
}

function visitPrerequisites(node: VaultNode, context: VisitContext): number {
  if (context.visiting.has(node.id)) {
    context.warnings.push(`Cycle detected while resolving ${getTitle(node)}.`)
    return 0
  }

  const existingStep = context.ordered.get(node.id)
  if (existingStep) return existingStep.depth

  context.visiting.add(node.id)

  const prerequisites = getLinkedNodes(
    node,
    'strict-prerequisites',
    context.nodesById,
    context.outgoingEdgesById,
  ).filter((prerequisite) => getType(prerequisite) === 'competency')

  const prerequisiteLevels = prerequisites.map((prerequisite) => visitPrerequisites(prerequisite, context))
  const depth = prerequisiteLevels.length === 0 ? 0 : Math.max(...prerequisiteLevels) + 1

  context.visiting.delete(node.id)
  context.ordered.set(node.id, {
    depth,
    isGoal: node.id === context.goalId,
    node,
  })

  return depth
}

function groupStepsIntoLayers(steps: LearningPathStep[]): LearningPathLayer[] {
  const layersByLevel = steps.reduce<Map<number, LearningPathStep[]>>((layers, step) => {
    const layerSteps = layers.get(step.depth) ?? []
    layerSteps.push(step)
    layers.set(step.depth, layerSteps)
    return layers
  }, new Map())

  return [...layersByLevel.entries()]
    .sort(([leftLevel], [rightLevel]) => leftLevel - rightLevel)
    .map(([level, layerSteps]) => ({ level, steps: layerSteps }))
}

function getLinkedNodes(
  node: VaultNode,
  frontmatterKey: string,
  nodesById: Map<string, VaultNode>,
  outgoingEdgesById: Map<string, VaultEdge[]>,
): VaultNode[] {
  const targets = getLinkedValues(node.frontmatter[frontmatterKey])
  const outgoingEdges = outgoingEdgesById.get(node.id) ?? []
  const linked = targets
    .map((target) => resolveLinkedNode(target, outgoingEdges, nodesById))
    .filter((linkedNode): linkedNode is VaultNode => Boolean(linkedNode))

  return [...new Map(linked.map((linkedNode) => [linkedNode.id, linkedNode])).values()]
}

function resolveLinkedNode(
  rawTarget: string,
  outgoingEdges: VaultEdge[],
  nodesById: Map<string, VaultNode>,
): VaultNode | undefined {
  const normalizedTarget = normalizeLinkTarget(rawTarget)
  const matchingEdge = outgoingEdges.find((edge) => {
    const rawEdgeTarget = normalizeLinkTarget(edge.rawTarget)
    return edge.resolved && (edge.to === normalizedTarget || rawEdgeTarget === normalizedTarget)
  })

  return nodesById.get(matchingEdge?.to ?? normalizedTarget)
}

function indexOutgoingEdges(edges: VaultEdge[]): Map<string, VaultEdge[]> {
  return edges.reduce<Map<string, VaultEdge[]>>((index, edge) => {
    const existing = index.get(edge.from) ?? []
    existing.push(edge)
    index.set(edge.from, existing)
    return index
  }, new Map())
}

function getLinkedValues(value: unknown): string[] {
  if (Array.isArray(value)) {
    return value.flatMap((item) => getLinkedValues(item))
  }

  if (typeof value !== 'string') return []

  const links = [...value.matchAll(/\[\[([^\]]+)\]\]/g)].map((match) => match[1])
  return links.length > 0 ? links.map(normalizeLinkTarget) : [normalizeLinkTarget(value)]
}

function normalizeLinkTarget(value: string): string {
  return value
    .trim()
    .replace(/^\[\[/, '')
    .replace(/\]\]$/, '')
    .split('|')[0]
    .split('#')[0]
    .replace(/\.md$/, '')
}
