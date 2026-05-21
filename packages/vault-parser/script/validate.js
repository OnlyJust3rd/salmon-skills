import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { validateVault } from '../dist/index.js'

const scriptDir = path.dirname(fileURLToPath(import.meta.url))
const packageRoot = path.resolve(scriptDir, '..')
const defaultVaultRoot = path.resolve(packageRoot, '../../vault')
const vaultRoot = path.resolve(process.argv[2] ?? defaultVaultRoot)

const result = await validateVault(vaultRoot, { ignoredFiles: ['README.md'] })

console.log(`Validated ${result.counts.nodes} nodes and ${result.counts.edges} edges`)
console.log(`Types: ${JSON.stringify(result.counts.byType)}`)

for (const issue of result.warnings) {
  console.warn(`[warning] ${issue.code}: ${issue.path ?? issue.nodeId ?? ''} ${issue.message}`)
}

for (const issue of result.errors) {
  console.error(`[error] ${issue.code}: ${issue.path ?? issue.nodeId ?? ''} ${issue.message}`)
}

if (!result.valid) {
  process.exitCode = 1
}
