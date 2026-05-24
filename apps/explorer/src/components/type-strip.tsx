import { Button } from './ui/button'

interface TypeStripProps {
  typeCounts: Record<string, number>
  typeFilter: string
  onTypeFilter: (type: string) => void
}

export function TypeStrip({ typeCounts, typeFilter, onTypeFilter }: TypeStripProps) {
  return (
    <section
      className="flex gap-2 overflow-x-auto border-b border-[hsl(var(--border))] bg-[hsl(var(--muted)_/_0.78)] px-8 py-3 max-[860px]:px-[18px] max-[860px]:py-2.5"
      aria-label="Graph type counts"
    >
      {Object.entries(typeCounts)
        .sort(([a], [b]) => a.localeCompare(b))
        .map(([type, count]) => (
          <Button
            className={[
              'min-h-[34px] whitespace-nowrap px-[11px]',
              typeFilter === type
                ? 'border-[hsl(var(--primary))] bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))]'
                : '',
            ]
              .filter(Boolean)
              .join(' ')}
            key={type}
            variant="outline"
            onClick={() => onTypeFilter(typeFilter === type ? 'all' : type)}
          >
            <span>{type}</span>
            <strong
              className={
                typeFilter === type
                  ? 'text-[hsl(var(--primary-foreground))]'
                  : 'text-[hsl(var(--accent))] tabular-nums'
              }
            >
              {count.toLocaleString()}
            </strong>
          </Button>
        ))}
    </section>
  )
}
