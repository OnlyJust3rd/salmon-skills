import { getTitle, getType } from '../graph'
import type { VaultNode } from '../types'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Select } from './ui/select'

interface SidebarProps {
  filteredNodes: VaultNode[]
  query: string
  selectedId: string | undefined
  typeCounts: Record<string, number>
  typeFilter: string
  onQuery: (query: string) => void
  onSelect: (id: string) => void
  onTypeFilter: (type: string) => void
}

export function Sidebar({
  filteredNodes,
  query,
  selectedId,
  typeCounts,
  typeFilter,
  onQuery,
  onSelect,
  onTypeFilter,
}: SidebarProps) {
  return (
    <aside className="sticky top-0 min-w-0 border-r border-[hsl(var(--border))] bg-[hsl(var(--card)_/_0.88)] backdrop-blur-[18px] max-[860px]:border-b max-[860px]:border-r-0">
      <div className="grid gap-3 border-b border-[hsl(var(--border))] p-[18px]">
        <label>
          <span className="mb-1.5 block text-xs font-extrabold text-[hsl(var(--muted-foreground))]">Search</span>
          <Input
            value={query}
            onChange={(event) => onQuery(event.target.value)}
            placeholder="Title, path, or id"
          />
        </label>
        <label>
          <span className="mb-1.5 block text-xs font-extrabold text-[hsl(var(--muted-foreground))]">Type</span>
          <Select value={typeFilter} onChange={(event) => onTypeFilter(event.target.value)}>
            <option value="all">All types</option>
            {Object.keys(typeCounts)
              .sort()
              .map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
          </Select>
        </label>
      </div>

      <div className="border-b border-[hsl(var(--border))] px-[18px] py-3 text-[13px] text-[hsl(var(--muted-foreground))]">
        {filteredNodes.length.toLocaleString()} matches
      </div>
      <ul className="m-0 max-h-[calc(100vh-286px)] list-none overflow-auto p-0 max-[860px]:max-h-[360px]">
        {filteredNodes.slice(0, 500).map((node) => (
          <li key={node.id}>
            <Button
              className={[
                'min-h-[58px] w-full !justify-start rounded-none border-0 border-b border-[hsl(var(--border))] px-[18px] py-[11px] hover:!translate-y-0 hover:bg-[hsl(var(--primary)_/_0.1)]',
                node.id === selectedId ? 'bg-[hsl(var(--primary)_/_0.1)] shadow-[inset_3px_0_0_hsl(var(--primary))]' : '',
              ]
                .filter(Boolean)
                .join(' ')}
              variant="ghost"
              onClick={() => onSelect(node.id)}
            >
              <span className="block overflow-hidden text-ellipsis whitespace-nowrap leading-[1.25] text-[hsl(var(--foreground))]">
                {getTitle(node)}
              </span>
              <small className="block overflow-hidden text-ellipsis whitespace-nowrap text-xs font-medium leading-[1.4] text-[hsl(var(--muted-foreground))]">
                {getType(node)}
              </small>
            </Button>
          </li>
        ))}
      </ul>
    </aside>
  )
}
