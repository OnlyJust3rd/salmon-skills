import { mkdir, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { parseVault } from '../dist/index.js'

const scriptDir = path.dirname(fileURLToPath(import.meta.url))
const packageRoot = path.resolve(scriptDir, '..')
const defaultVaultRoot = path.resolve(packageRoot, '../../vault')
const defaultOutputPath = path.resolve(packageRoot, 'output/vault-graph.json')

const vaultRoot = path.resolve(process.argv[2] ?? defaultVaultRoot)
const outputPath = path.resolve(process.argv[3] ?? defaultOutputPath)
const ignoredFiles = ['README.md']

const graph = await parseVault(vaultRoot, { ignoredFiles })

await mkdir(path.dirname(outputPath), { recursive: true })
await writeFile(outputPath, `${JSON.stringify(graph, null, 2)}\n`, 'utf8')

console.log(`Parsed ${graph.nodes.length} nodes and ${graph.edges.length} edges`)
console.log(`Wrote ${outputPath}`)
