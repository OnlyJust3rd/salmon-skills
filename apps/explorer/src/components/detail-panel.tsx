import { lazy, Suspense } from 'react'
import { getTitle, getType } from '../graph'
import type { VaultEdge, VaultNode } from '../types'
import { Button } from './ui/button'
import { Card } from './ui/card'

const MarkdownRenderer = lazy(() =>
  import('./markdown-renderer').then((module) => ({ default: module.MarkdownRenderer })),
)

interface DetailPanelProps {
  nodesById: Map<string, VaultNode>
  outgoingEdges: VaultEdge[]
  selectedNode: VaultNode | undefined
  onSelect: (id: string) => void
}

export function DetailPanel({ nodesById, outgoingEdges, selectedNode, onSelect }: DetailPanelProps) {
  if (!selectedNode) {
    return (
      <article className="min-w-0 px-8 py-7 max-[860px]:px-[18px] max-[860px]:py-[22px]">
        <p className="m-0 text-[hsl(var(--muted-foreground))]">No node selected.</p>
      </article>
    )
  }

  const uniqueOutgoingEdges = [...new Map(outgoingEdges.map((edge) => [edge.to, edge])).values()]
  const sortedOutgoingEdges = uniqueOutgoingEdges.sort((a, b) => {
    const aTarget = nodesById.get(a.to)
    const bTarget = nodesById.get(b.to)
    const aLabel = (aTarget ? getTitle(aTarget) : a.rawTarget).toLowerCase()
    const bLabel = (bTarget ? getTitle(bTarget) : b.rawTarget).toLowerCase()

    return aLabel.localeCompare(bLabel, undefined, { numeric: true })
  })

  return (
    <article className="min-w-0 px-8 py-7 max-[860px]:px-[18px] max-[860px]:py-[22px]">
      <div className="flex items-start justify-between gap-[18px] border-b border-[hsl(var(--border))] pb-[18px] max-[860px]:block">
        <div>
          <p className="m-0 mb-1.5 text-xs font-extrabold uppercase tracking-[0.08em] text-[hsl(var(--primary))]">
            {getType(selectedNode)}
          </p>
          <h2 className="m-0 text-[26px] leading-[1.15] text-[hsl(var(--foreground))]">{getTitle(selectedNode)}</h2>
        </div>
        <span className="max-w-[42%] [overflow-wrap:anywhere] font-mono text-xs leading-[1.4] text-[hsl(var(--muted-foreground))] max-[860px]:mt-3 max-[860px]:block max-[860px]:max-w-none">
          {selectedNode.path}
        </span>
      </div>

      <section
        className="my-[18px] grid grid-cols-[1fr_180px] gap-3 max-[860px]:block max-[860px]:[&>*+*]:mt-2.5"
        aria-label="Node metadata"
      >
        <Card className="px-3 py-2.5">
          <span className="mb-1 block text-xs font-extrabold text-[hsl(var(--muted-foreground))]">ID</span>
          <code className="[overflow-wrap:anywhere] font-mono text-[13px] text-[hsl(var(--foreground))]">
            {selectedNode.id}
          </code>
        </Card>
        <Card className="px-3 py-2.5">
          <span className="mb-1 block text-xs font-extrabold text-[hsl(var(--muted-foreground))]">
            Outgoing Links
          </span>
          <strong className="text-xl">{outgoingEdges.length.toLocaleString()}</strong>
        </Card>
      </section>

      <section className="mt-6 border-t border-[hsl(var(--border))] pt-[18px]" aria-label="Markdown content">
        <div className="flex items-baseline justify-between gap-4 max-[860px]:block">
          <h3 className="m-0 mb-3 text-[15px] text-[hsl(var(--foreground))]">Markdown</h3>
          <span className="font-mono text-xs text-[hsl(var(--muted-foreground))]">
            {selectedNode.content ? `${selectedNode.content.length.toLocaleString()} chars` : 'No content'}
          </span>
        </div>
        {selectedNode.content ? (
          <div className="markdown-renderer max-h-[56vh] overflow-auto rounded-[var(--radius)] border border-[hsl(var(--border))] bg-[linear-gradient(180deg,hsl(var(--card)),hsl(var(--muted)_/_0.55)),repeating-linear-gradient(90deg,hsl(var(--foreground)_/_0.04),hsl(var(--foreground)_/_0.04)_1px,transparent_1px,transparent_12px)] p-4 shadow-[var(--panel-shadow)] max-[860px]:max-h-[420px]">
            <Suspense fallback={<p className="m-0 text-[hsl(var(--muted-foreground))]">Rendering Markdown...</p>}>
              <MarkdownRenderer markdown={selectedNode.content} />
            </Suspense>
          </div>
        ) : (
          <p className="m-0 text-[hsl(var(--muted-foreground))]">
            This graph dump does not include Markdown content for this node.
          </p>
        )}
      </section>

      <section className="mt-6 border-t border-[hsl(var(--border))] pt-[18px]" aria-label="Outgoing links">
        <h3 className="m-0 mb-3 text-[15px] text-[hsl(var(--foreground))]">Outgoing Links</h3>
        {outgoingEdges.length > 0 ? (
          <ul className="m-0 list-none p-0">
            {sortedOutgoingEdges.slice(0, 80).map((edge) => {
              const target = nodesById.get(edge.to)
              return (
                <li key={`${edge.from}-${edge.rawTarget}-${edge.to}`}>
                  <Button
                    className="mb-2 min-h-[58px] w-full !justify-start px-3 py-2.5"
                    variant="outline"
                    onClick={() => onSelect(edge.to)}
                  >
                    <span className="block overflow-hidden text-ellipsis whitespace-nowrap leading-[1.25] text-[hsl(var(--foreground))]">
                      {target ? getTitle(target) : edge.rawTarget}
                    </span>
                    <small className="block overflow-hidden text-ellipsis whitespace-nowrap text-xs font-medium leading-[1.4] text-[hsl(var(--muted-foreground))]">
                      {edge.to}
                    </small>
                  </Button>
                </li>
              )
            })}
          </ul>
        ) : (
          <p className="m-0 text-[hsl(var(--muted-foreground))]">No outgoing graph links.</p>
        )}
      </section>
    </article>
  )
}
