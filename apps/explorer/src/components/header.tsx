import type { Theme } from '../use-theme'
import type { VaultEdge, VaultNode } from '../types'
import { Button } from './ui/button'
import { Card } from './ui/card'

interface HeaderProps {
  edges: VaultEdge[]
  nodes: VaultNode[]
  theme: Theme
  typeCounts: Record<string, number>
  onToggleTheme: () => void
}

export function Header({ edges, nodes, theme, typeCounts, onToggleTheme }: HeaderProps) {
  return (
    <header className="flex items-end justify-between gap-7 border-b border-[hsl(var(--border))] bg-[hsl(var(--card)_/_0.88)] px-8 pb-5 pt-7 backdrop-blur-[18px] max-[860px]:block max-[860px]:px-[18px] max-[860px]:pb-4 max-[860px]:pt-[22px]">
      <div>
        <p className="m-0 mb-1.5 text-xs font-extrabold uppercase tracking-[0.08em] text-[hsl(var(--primary))]">
          SALMON Explorer
        </p>
        <h1 className="m-0 text-[34px] leading-[1.05] text-[hsl(var(--foreground))]">Learning Graph</h1>
      </div>
      <div className="flex items-end gap-3 max-[860px]:block">
        <Button
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          aria-pressed={theme === 'dark'}
          className="min-w-[108px] px-3 max-[860px]:mb-3 max-[860px]:mt-4"
          variant="outline"
          onClick={onToggleTheme}
        >
          <span
            className="h-3.5 w-3.5 rounded-full border-2 border-current shadow-[0_0_0_4px_hsl(var(--accent)_/_0.16)]"
            aria-hidden="true"
          />
          <span>{theme === 'dark' ? 'Dark' : 'Light'}</span>
        </Button>
        <dl className="grid grid-cols-3 gap-2.5">
          <SummaryItem label="Nodes" value={nodes.length} />
          <SummaryItem label="Edges" value={edges.length} />
          <SummaryItem label="Types" value={Object.keys(typeCounts).length} />
        </dl>
      </div>
    </header>
  )
}

function SummaryItem({ label, value }: { label: string; value: number }) {
  return (
    <Card className="px-3 py-2.5">
      <dt className="mb-1 block text-xs font-extrabold text-[hsl(var(--muted-foreground))]">{label}</dt>
      <dd className="m-0 text-[22px] font-extrabold text-[hsl(var(--foreground))]">{value.toLocaleString()}</dd>
    </Card>
  )
}
