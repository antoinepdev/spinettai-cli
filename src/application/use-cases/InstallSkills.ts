import type { Skill } from '../../entities/Skill.ts'
import type { ISkillInstaller } from '../interfaces/ISkillInstaller.ts'

interface InstallSkillsParams {
	skills: Skill[]
	destRoot: string
}

export class InstallSkills {
	readonly #installer: ISkillInstaller

	constructor(installer: ISkillInstaller) {
		this.#installer = installer
	}

	execute({ skills, destRoot }: InstallSkillsParams): void {
		this.#installer.install(skills, destRoot)
	}
}
