export interface VaultNode {
  id: string
  path: string
  content?: string
  frontmatter: Record<string, unknown>
}

export interface VaultEdge {
  from: string
  to: string
  rawTarget: string
  resolved: boolean
}

export interface VaultGraph {
  nodes: VaultNode[]
  edges: VaultEdge[]
}

export type LoadState =
  | { status: 'loading' }
  | { status: 'ready'; graph: VaultGraph }
  | { status: 'error'; message: string }
