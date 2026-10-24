import type { Agent } from '../../entities/Agent.ts'
import type { Skill } from '../../entities/Skill.ts'
import type { ISkillLinker } from '../interfaces/ISkillLinker.ts'

interface LinkSkillsToAgentsParams {
	skills: Skill[]
	agents: Agent[]
	destRoot: string
}

export class LinkSkillsToAgents {
	readonly #linker: ISkillLinker

	constructor(linker: ISkillLinker) {
		this.#linker = linker
	}

	execute({ skills, agents, destRoot }: LinkSkillsToAgentsParams): void {
		this.#linker.link(skills, agents, destRoot)
	}
}
