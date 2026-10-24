import type { Skill } from '../../entities/Skill.ts'

export interface ISkillInstaller {
	install(skills: Skill[], destRoot: string): void
}
