import type { Agent } from '../../entities/Agent.ts'
import type { Skill } from '../../entities/Skill.ts'

export interface ISkillLinker {
	link(skills: Skill[], agents: Agent[], destRoot: string): void
}
