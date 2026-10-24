import type { Skill } from '../../entities/Skill.ts'

export interface ICatalogReader {
	read(): Skill[]
}
