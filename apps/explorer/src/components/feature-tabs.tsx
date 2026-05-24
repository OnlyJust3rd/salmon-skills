import { Button } from './ui/button'

export type FeatureMode = 'explore' | 'learning-path'

interface FeatureTabsProps {
  activeMode: FeatureMode
  onModeChange: (mode: FeatureMode) => void
}

const modes: Array<{ label: string; value: FeatureMode }> = [
  { label: 'Explore', value: 'explore' },
  { label: 'Learning Path', value: 'learning-path' },
]

export function FeatureTabs({ activeMode, onModeChange }: FeatureTabsProps) {
  return (
    <nav
      className="flex gap-2 border-b border-[hsl(var(--border))] bg-[hsl(var(--card)_/_0.82)] px-8 py-3 max-[860px]:px-[18px]"
      aria-label="Explorer features"
    >
      {modes.map((mode) => (
        <Button
          aria-current={activeMode === mode.value ? 'page' : undefined}
          className={[
            'min-h-[34px] px-3 text-sm hover:!translate-y-0',
            activeMode === mode.value
              ? 'border-[hsl(var(--primary))] bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))]'
              : '',
          ]
            .filter(Boolean)
            .join(' ')}
          key={mode.value}
          size="sm"
          variant="outline"
          onClick={() => onModeChange(mode.value)}
        >
          {mode.label}
        </Button>
      ))}
    </nav>
  )
}
