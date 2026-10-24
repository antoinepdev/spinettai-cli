import { join, relative } from 'node:path'
import type { Skill } from './Skill.ts'

type AgentName = 'opencode' | 'claude-code' | 'gemini-cli' | 'codex'

interface AgentProps {
	name: AgentName
	relativePath: string[]
}

export class Agent {
	readonly name: AgentName
	readonly #relativePath: string[]

	constructor({ name, relativePath }: AgentProps) {
		this.name = name
		this.#relativePath = relativePath
	}

	skillsDir(destRoot: string): string {
		return join(destRoot, ...this.#relativePath)
	}

	linkPathFor(skill: Skill, destRoot: string): string {
		return join(this.skillsDir(destRoot), skill.name)
	}

	linkTargetFor(skill: Skill, destRoot: string): string {
		return relative(this.skillsDir(destRoot), skill.destinationIn(destRoot))
	}
}
