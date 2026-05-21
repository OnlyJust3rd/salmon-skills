import { useEffect, useMemo, useState } from 'react'
import './App.css'

interface VaultNode {
  id: string
  path: string
  frontmatter: Record<string, unknown>
}

interface VaultEdge {
  from: string
  to: string
  rawTarget: string
  resolved: boolean
}

interface VaultGraph {
  nodes: VaultNode[]
  edges: VaultEdge[]
}

type LoadState =
  | { status: 'loading' }
  | { status: 'ready'; graph: VaultGraph }
  | { status: 'error'; message: string }

const graphUrl = '/vault-graph.json'
const emptyNodes: VaultNode[] = []
const emptyEdges: VaultEdge[] = []

function App() {
  const [loadState, setLoadState] = useState<LoadState>({ status: 'loading' })
  const [query, setQuery] = useState('')
  const [typeFilter, setTypeFilter] = useState('all')
  const [selectedId, setSelectedId] = useState<string | null>(null)

  useEffect(() => {
    let active = true

    async function loadGraph() {
      try {
        const response = await fetch(graphUrl)
        if (!response.ok) throw new Error(`Unable to load ${graphUrl}`)
        const graph = (await response.json()) as VaultGraph
        if (active) {
          setLoadState({ status: 'ready', graph })
          setSelectedId(graph.nodes[0]?.id ?? null)
        }
      } catch (error) {
        if (active) {
          setLoadState({
            status: 'error',
            message: error instanceof Error ? error.message : 'Unable to load graph data',
          })
        }
      }
    }

    void loadGraph()

    return () => {
      active = false
    }
  }, [])

  const graph = loadState.status === 'ready' ? loadState.graph : null
  const nodes = graph?.nodes ?? emptyNodes
  const edges = graph?.edges ?? emptyEdges
  const selectedNode = nodes.find((node) => node.id === selectedId) ?? nodes[0]

  const typeCounts = useMemo(() => {
    return nodes.reduce<Record<string, number>>((counts, node) => {
      const type = getType(node)
      counts[type] = (counts[type] ?? 0) + 1
      return counts
    }, {})
  }, [nodes])

  const filteredNodes = useMemo(() => {
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
  }, [nodes, query, typeFilter])

  const outgoingEdges = useMemo(() => {
    if (!selectedNode) return []
    return edges.filter((edge) => edge.from === selectedNode.id)
  }, [edges, selectedNode])

  const nodesById = useMemo(() => {
    return new Map(nodes.map((node) => [node.id, node]))
  }, [nodes])

  if (loadState.status === 'loading') {
    return <main className="shell status">Loading SALMON graph...</main>
  }

  if (loadState.status === 'error') {
    return (
      <main className="shell status">
        <h1>SALMON Explorer</h1>
        <p>{loadState.message}</p>
        <p>
          Run <code>pnpm graph</code> from the repository root.
        </p>
      </main>
    )
  }

  return (
    <main className="shell">
      <header className="topbar">
        <div>
          <p className="eyebrow">SALMON Explorer</p>
          <h1>Learning Graph</h1>
        </div>
        <dl className="summary">
          <div>
            <dt>Nodes</dt>
            <dd>{nodes.length.toLocaleString()}</dd>
          </div>
          <div>
            <dt>Edges</dt>
            <dd>{edges.length.toLocaleString()}</dd>
          </div>
          <div>
            <dt>Types</dt>
            <dd>{Object.keys(typeCounts).length.toLocaleString()}</dd>
          </div>
        </dl>
      </header>

      <section className="type-strip" aria-label="Graph type counts">
        {Object.entries(typeCounts)
          .sort(([a], [b]) => a.localeCompare(b))
          .map(([type, count]) => (
            <button
              className={typeFilter === type ? 'type-chip active' : 'type-chip'}
              key={type}
              type="button"
              onClick={() => setTypeFilter(typeFilter === type ? 'all' : type)}
            >
              <span>{type}</span>
              <strong>{count.toLocaleString()}</strong>
            </button>
          ))}
      </section>

      <section className="workspace">
        <aside className="sidebar">
          <div className="filters">
            <label>
              <span>Search</span>
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Title, path, or id"
              />
            </label>
            <label>
              <span>Type</span>
              <select value={typeFilter} onChange={(event) => setTypeFilter(event.target.value)}>
                <option value="all">All types</option>
                {Object.keys(typeCounts)
                  .sort()
                  .map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
              </select>
            </label>
          </div>

          <div className="result-count">{filteredNodes.length.toLocaleString()} matches</div>
          <ul className="node-list">
            {filteredNodes.slice(0, 500).map((node) => (
              <li key={node.id}>
                <button
                  className={node.id === selectedNode?.id ? 'node-button active' : 'node-button'}
                  type="button"
                  onClick={() => setSelectedId(node.id)}
                >
                  <span>{getTitle(node)}</span>
                  <small>{getType(node)}</small>
                </button>
              </li>
            ))}
          </ul>
        </aside>

        <article className="detail">
          {selectedNode ? (
            <>
              <div className="detail-heading">
                <div>
                  <p className="eyebrow">{getType(selectedNode)}</p>
                  <h2>{getTitle(selectedNode)}</h2>
                </div>
                <span className="path">{selectedNode.path}</span>
              </div>

              <section className="metadata" aria-label="Node metadata">
                <div>
                  <span>ID</span>
                  <code>{selectedNode.id}</code>
                </div>
                <div>
                  <span>Outgoing Links</span>
                  <strong>{outgoingEdges.length.toLocaleString()}</strong>
                </div>
              </section>

              <section className="links" aria-label="Outgoing links">
                <h3>Outgoing Links</h3>
                {outgoingEdges.length > 0 ? (
                  <ul>
                    {outgoingEdges.slice(0, 80).map((edge) => {
                      const target = nodesById.get(edge.to)
                      return (
                        <li key={`${edge.from}-${edge.rawTarget}-${edge.to}`}>
                          <button type="button" onClick={() => setSelectedId(edge.to)}>
                            <span>{target ? getTitle(target) : edge.rawTarget}</span>
                            <small>{edge.to}</small>
                          </button>
                        </li>
                      )
                    })}
                  </ul>
                ) : (
                  <p>No outgoing graph links.</p>
                )}
              </section>
            </>
          ) : (
            <p>No node selected.</p>
          )}
        </article>
      </section>
    </main>
  )
}

function getType(node: VaultNode): string {
  const value = node.frontmatter.type
  return typeof value === 'string' && value ? value : 'unknown'
}

function getTitle(node: VaultNode): string {
  const value = node.frontmatter.title
  if (typeof value === 'string' && value) return value
  return node.id.split('/').at(-1) ?? node.id
}

export default App
