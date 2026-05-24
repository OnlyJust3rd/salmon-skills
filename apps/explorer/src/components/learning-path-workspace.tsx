import { useMemo, useState } from 'react'
import {
  buildLearningPaths,
  filterLearningPathGoals,
  getTitle,
  getType,
  indexNodesById,
} from '../graph'
import type { VaultEdge, VaultNode } from '../types'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { LearningPathPanel } from './learning-path-panel'
import { Select } from './ui/select'

interface LearningPathWorkspaceProps {
  edges: VaultEdge[]
  nodes: VaultNode[]
  selectedGoalIds: string[]
  onInspectNode: (id: string) => void
  onToggleGoal: (id: string) => void
}

export function LearningPathWorkspace({
  edges,
  nodes,
  selectedGoalIds,
  onInspectNode,
  onToggleGoal,
}: LearningPathWorkspaceProps) {
  const [goalQuery, setGoalQuery] = useState('')
  const [goalTypeFilter, setGoalTypeFilter] = useState('all')
  const nodesById = useMemo(() => indexNodesById(nodes), [nodes])
  const filteredGoals = useMemo(
    () => filterLearningPathGoals(nodes, goalQuery, goalTypeFilter),
    [goalQuery, goalTypeFilter, nodes],
  )
  const learningPathResult = useMemo(
    () => buildLearningPaths(nodes, edges, selectedGoalIds),
    [edges, nodes, selectedGoalIds],
  )

  return (
    <section className="grid min-h-[calc(100vh-213px)] grid-cols-[minmax(280px,390px)_1fr] max-[860px]:grid-cols-1">
      <aside className="sticky top-0 min-w-0 border-r border-[hsl(var(--border))] bg-[hsl(var(--card)_/_0.88)] backdrop-blur-[18px] max-[860px]:border-b max-[860px]:border-r-0">
        <div className="grid gap-3 border-b border-[hsl(var(--border))] p-[18px]">
          <label>
            <span className="mb-1.5 block text-xs font-extrabold text-[hsl(var(--muted-foreground))]">
              Goal Search
            </span>
            <Input
              value={goalQuery}
              onChange={(event) => setGoalQuery(event.target.value)}
              placeholder="Skill or competency"
            />
          </label>
          <label>
            <span className="mb-1.5 block text-xs font-extrabold text-[hsl(var(--muted-foreground))]">Goal Type</span>
            <Select value={goalTypeFilter} onChange={(event) => setGoalTypeFilter(event.target.value)}>
              <option value="all">Careers, skills, and competencies</option>
              <option value="career">Careers</option>
              <option value="skill">Skills with standard competency</option>
              <option value="competency">Competencies</option>
            </Select>
          </label>
        </div>

        <div className="border-b border-[hsl(var(--border))] px-[18px] py-3 text-[13px] text-[hsl(var(--muted-foreground))]">
          {filteredGoals.length.toLocaleString()} eligible goals
        </div>
        <ul className="m-0 max-h-[calc(100vh-286px)] list-none overflow-auto p-0 max-[860px]:max-h-[360px]">
          {filteredGoals.slice(0, 500).map((node) => {
            const isSelected = selectedGoalIds.includes(node.id)
            const isGoalLimitReached = selectedGoalIds.length >= 16 && !isSelected

            return (
              <li className="flex border-b border-[hsl(var(--border))]" key={node.id}>
                <Button
                  aria-label={
                    isSelected
                      ? `Learning path goal selected: ${getTitle(node)}`
                      : `Select learning path goal: ${getTitle(node)}`
                  }
                  className="min-h-[58px] min-w-0 flex-1 !justify-start rounded-none border-0 px-[18px] py-[11px] hover:!translate-y-0 hover:bg-[hsl(var(--primary)_/_0.1)]"
                  disabled={isGoalLimitReached}
                  variant="ghost"
                  onClick={() => {
                    if (!isSelected) onToggleGoal(node.id)
                  }}
                >
                  <span className="block overflow-hidden text-ellipsis whitespace-nowrap leading-[1.25] text-[hsl(var(--foreground))]">
                    {getTitle(node)}
                  </span>
                  <small className="block overflow-hidden text-ellipsis whitespace-nowrap text-xs font-medium leading-[1.4] text-[hsl(var(--muted-foreground))]">
                    {getType(node)}
                  </small>
                </Button>
                <Button
                  aria-label={`${isSelected ? 'Remove from' : 'Add to'} learning path goals: ${getTitle(node)}`}
                  aria-pressed={isSelected}
                  className={[
                    'm-2 min-h-[34px] shrink-0 px-2.5 text-xs hover:!translate-y-0',
                    isSelected
                      ? 'border-[hsl(var(--primary))] bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))]'
                      : '',
                  ]
                    .filter(Boolean)
                    .join(' ')}
                  disabled={isGoalLimitReached}
                  size="sm"
                  variant="outline"
                  onClick={() => onToggleGoal(node.id)}
                >
                  {isSelected ? 'Added' : 'Add'}
                </Button>
              </li>
            )
          })}
        </ul>
      </aside>

      <LearningPathPanel
        nodesById={nodesById}
        result={learningPathResult}
        selectedGoalIds={selectedGoalIds}
        onRemoveGoal={onToggleGoal}
        onSelect={onInspectNode}
      />
    </section>
  )
}
