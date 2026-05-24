import { useEffect, useState } from 'react'
import type { LoadState, VaultGraph } from './types'

const graphUrl = '/vault-graph.json'

export function useVaultGraph(): LoadState {
  const [loadState, setLoadState] = useState<LoadState>({ status: 'loading' })

  useEffect(() => {
    let active = true

    async function loadGraph() {
      try {
        const response = await fetch(graphUrl)
        if (!response.ok) throw new Error(`Unable to load ${graphUrl}`)
        const graph = (await response.json()) as VaultGraph
        if (active) setLoadState({ status: 'ready', graph })
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

  return loadState
}
