import { getTitle, getType } from '../graph'
import type { LearningPathResult } from '../graph'
import type { VaultNode } from '../types'
import { Button } from './ui/button'
import { Card } from './ui/card'

interface LearningPathPanelProps {
  result: LearningPathResult
  selectedGoalIds: string[]
  nodesById: Map<string, VaultNode>
  onRemoveGoal: (id: string) => void
  onSelect: (id: string) => void
}

export function LearningPathPanel({
  result,
  selectedGoalIds,
  nodesById,
  onRemoveGoal,
  onSelect,
}: LearningPathPanelProps) {
  const selectedGoals = selectedGoalIds.map((id) => nodesById.get(id)).filter((node): node is VaultNode => Boolean(node))

  return (
    <section
      className="min-w-0 bg-[hsl(var(--card)_/_0.58)] px-8 py-5 max-[860px]:px-[18px]"
      aria-label="Learning path query"
    >
      <div className="mb-4 flex items-start justify-between gap-4 max-[860px]:block">
        <div>
          <p className="m-0 mb-1.5 text-xs font-extrabold uppercase tracking-[0.08em] text-[hsl(var(--primary))]">
            Learning Path
          </p>
          <h2 className="m-0 text-xl leading-tight text-[hsl(var(--foreground))]">
            {selectedGoalIds.length > 0 ? `${selectedGoalIds.length}/16 goals selected` : 'Select goals from the list'}
          </h2>
        </div>
        {selectedGoals.length > 0 ? (
          <div className="flex max-w-[48%] flex-wrap justify-end gap-2 max-[860px]:mt-3 max-[860px]:max-w-none max-[860px]:justify-start">
            {selectedGoals.map((goal) => (
              <Button
                className="max-w-[220px] px-2.5 text-xs hover:!translate-y-0"
                key={goal.id}
                size="sm"
                variant="secondary"
                onClick={() => onRemoveGoal(goal.id)}
              >
                <span className="overflow-hidden text-ellipsis whitespace-nowrap">{getTitle(goal)}</span>
                <span aria-hidden="true">x</span>
              </Button>
            ))}
          </div>
        ) : null}
      </div>

      {result.warnings.length > 0 ? (
        <Card className="mb-4 px-3 py-2.5">
          <ul className="m-0 list-none p-0 text-sm text-[hsl(var(--muted-foreground))]">
            {result.warnings.map((warning) => (
              <li key={warning}>{warning}</li>
            ))}
          </ul>
        </Card>
      ) : null}

      {result.paths.length > 0 ? (
        <div className="grid gap-3">
          {result.paths.map((path) => (
            <Card className="px-3 py-3" key={`${path.sourceGoal.id}-${path.targetCompetency.id}`}>
              <div className="mb-3 flex items-start justify-between gap-3 max-[860px]:block">
                <div>
                  <h3 className="m-0 text-[15px] text-[hsl(var(--foreground))]">
                    {getTitle(path.targetCompetency)}
                  </h3>
                  <p className="m-0 mt-1 text-xs text-[hsl(var(--muted-foreground))]">
                    {path.sourceGoal.id === path.targetCompetency.id
                      ? 'competency goal'
                      : `standard competency for ${getTitle(path.sourceGoal)}`}
                  </p>
                </div>
                <span className="font-mono text-xs text-[hsl(var(--muted-foreground))]">
                  {path.steps.length.toLocaleString()} steps
                </span>
              </div>
              <div className="grid gap-3">
                {path.layers.map((layer, index) => (
                  <div className="grid gap-2" key={layer.level}>
                    <div className="flex items-center gap-3">
                      <span className="min-w-[66px] text-xs font-bold uppercase text-[hsl(var(--muted-foreground))]">
                        {getLayerLabel(index, path.layers.length)}
                      </span>
                      <span className="h-px flex-1 bg-[hsl(var(--border))]" />
                    </div>
                    <div className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-2">
                      {layer.steps.map((step) => (
                        <Button
                          className={[
                            'min-h-[72px] min-w-0 !justify-start px-3 py-2 text-left hover:!translate-y-0',
                            step.isGoal
                              ? 'border-[hsl(var(--primary))] bg-[hsl(var(--primary)_/_0.08)] shadow-[0_0_0_1px_hsl(var(--primary)_/_0.18)]'
                              : 'bg-[hsl(var(--background)_/_0.68)]',
                          ]
                            .filter(Boolean)
                            .join(' ')}
                          key={step.node.id}
                          variant="outline"
                          onClick={() => onSelect(step.node.id)}
                        >
                          <span className="block min-w-0">
                            <span className="block overflow-hidden text-ellipsis whitespace-nowrap text-[hsl(var(--foreground))]">
                              {getTitle(step.node)}
                            </span>
                            <small className="mt-1 block overflow-hidden text-ellipsis whitespace-nowrap text-xs font-medium text-[hsl(var(--muted-foreground))]">
                              {getType(step.node)}
                            </small>
                          </span>
                        </Button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      ) : (
        <p className="m-0 text-sm text-[hsl(var(--muted-foreground))]">
          Add skill or competency goals from the picker to query prerequisites from L1 starts to the selected goals.
        </p>
      )}
    </section>
  )
}

function getLayerLabel(index: number, totalLayers: number): string {
  if (totalLayers === 1) return 'Start / Goal'
  if (index === 0) return 'Start'
  if (index === totalLayers - 1) return 'Goal'
  return `Level ${index + 1}`
}
