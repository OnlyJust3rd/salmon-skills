import { useMemo, useState } from 'react'
import './app.css'
import { DetailPanel } from './components/detail-panel'
import { ErrorState } from './components/error-state'
import { Header } from './components/header'
import { Sidebar } from './components/sidebar'
import { TypeStrip } from './components/type-strip'
import { countByType, emptyEdges, emptyNodes, filterNodes, getOutgoingEdges, indexNodesById } from './graph'
import { useTheme } from './use-theme'
import { useVaultGraph } from './use-vault-graph'

function App() {
  const loadState = useVaultGraph()
  const { theme, toggleTheme } = useTheme()
  const [query, setQuery] = useState('')
  const [typeFilter, setTypeFilter] = useState('all')
  const [selectedId, setSelectedId] = useState<string | null>(null)

  const graph = loadState.status === 'ready' ? loadState.graph : null
  const nodes = graph?.nodes ?? emptyNodes
  const edges = graph?.edges ?? emptyEdges
  const selectedNode = nodes.find((node) => node.id === selectedId) ?? nodes[0]

  const typeCounts = useMemo(() => countByType(nodes), [nodes])
  const filteredNodes = useMemo(() => filterNodes(nodes, query, typeFilter), [nodes, query, typeFilter])
  const outgoingEdges = useMemo(() => getOutgoingEdges(edges, selectedNode), [edges, selectedNode])
  const nodesById = useMemo(() => indexNodesById(nodes), [nodes])

  if (loadState.status === 'loading') {
    return (
      <main className="grid min-h-screen place-content-center gap-3 bg-[radial-gradient(circle_at_10%_0%,hsl(var(--primary)_/_0.16),transparent_30%),radial-gradient(circle_at_92%_8%,hsl(var(--accent)_/_0.2),transparent_24%),hsl(var(--background))] p-8 text-center text-[hsl(var(--foreground))]">
        Loading SALMON graph...
      </main>
    )
  }

  if (loadState.status === 'error') {
    return <ErrorState message={loadState.message} />
  }

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_10%_0%,hsl(var(--primary)_/_0.16),transparent_30%),radial-gradient(circle_at_92%_8%,hsl(var(--accent)_/_0.2),transparent_24%),hsl(var(--background))] text-[hsl(var(--foreground))]">
      <Header nodes={nodes} edges={edges} theme={theme} typeCounts={typeCounts} onToggleTheme={toggleTheme} />
      <TypeStrip typeCounts={typeCounts} typeFilter={typeFilter} onTypeFilter={setTypeFilter} />

      <section className="grid min-h-[calc(100vh-156px)] grid-cols-[minmax(280px,360px)_1fr] max-[860px]:grid-cols-1">
        <Sidebar
          filteredNodes={filteredNodes}
          query={query}
          selectedId={selectedNode?.id}
          typeCounts={typeCounts}
          typeFilter={typeFilter}
          onQuery={setQuery}
          onSelect={setSelectedId}
          onTypeFilter={setTypeFilter}
        />
        <DetailPanel
          nodesById={nodesById}
          outgoingEdges={outgoingEdges}
          selectedNode={selectedNode}
          onSelect={setSelectedId}
        />
      </section>
    </main>
  )
}

export default App
