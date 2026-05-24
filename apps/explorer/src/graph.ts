import type { VaultEdge, VaultNode } from './types'

export const emptyNodes: VaultNode[] = []
export const emptyEdges: VaultEdge[] = []

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

export function indexNodesById(nodes: VaultNode[]): Map<string, VaultNode> {
  return new Map(nodes.map((node) => [node.id, node]))
}

export function getOutgoingEdges(edges: VaultEdge[], selectedNode: VaultNode | undefined) {
  if (!selectedNode) return []
  return edges.filter((edge) => edge.from === selectedNode.id)
}
