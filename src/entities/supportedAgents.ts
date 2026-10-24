import { Agent } from './Agent.ts'

export const SUPPORTED_AGENTS: Agent[] = [
	new Agent({ name: 'opencode', agentConfigDir: '.opencode' }),
	new Agent({ name: 'claude-code', agentConfigDir: '.claude' }),
	new Agent({ name: 'gemini-cli', agentConfigDir: '.gemini' }),
	new Agent({ name: 'codex', agentConfigDir: '.codex' }),
]
