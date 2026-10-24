import { cpSync, existsSync } from 'node:fs'
import { join } from 'node:path'
import type { ISkillInstaller } from '../application/interfaces/ISkillInstaller.ts'
import type { Skill } from '../entities/Skill.ts'

export class FsSkillInstaller implements ISkillInstaller {
	install(skills: Skill[], destRoot: string): void {
		const destSkills = join(destRoot, 'skills')

		if (existsSync(destSkills)) {
			throw new Error('ya existe el directorio skills en el destino')
		}

		for (const skill of skills) {
			cpSync(skill.path, skill.destinationIn(destRoot), {
				recursive: true,
				preserveTimestamps: true,
				dereference: false,
			})
		}
	}
}
