import { Agent } from './Agent.ts'

export const SUPPORTED_AGENTS: Agent[] = [
	new Agent({ name: 'opencode', relativePath: ['.opencode', 'skills'] }),
	new Agent({ name: 'claude-code', relativePath: ['.claude', 'skills'] }),
	new Agent({ name: 'gemini-cli', relativePath: ['.gemini', 'skills'] }),
	new Agent({ name: 'codex', relativePath: ['.codex', 'skills'] }),
]
