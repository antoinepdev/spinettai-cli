import { join, relative } from 'node:path'
import type { Skill } from './Skill.ts'

type AgentName = 'opencode' | 'claude-code' | 'gemini-cli' | 'codex'

interface AgentProps {
	name: AgentName
	agentConfigDir: string
}

export class Agent {
	readonly name: AgentName
	readonly #agentConfigDir: string

	constructor({ name, agentConfigDir }: AgentProps) {
		this.name = name
		this.#agentConfigDir = agentConfigDir
	}

	skillsDir(destRoot: string): string {
		return join(destRoot, this.#agentConfigDir, 'skills')
	}

	linkPathFor(skill: Skill, destRoot: string): string {
		return join(this.skillsDir(destRoot), skill.name)
	}

	linkTargetFor(skill: Skill, destRoot: string): string {
		return relative(this.skillsDir(destRoot), skill.destinationIn(destRoot))
	}
}
