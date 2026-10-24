import { join } from 'node:path'

interface SkillProps {
	name: string
	path: string
	category: string
}

export class Skill {
	readonly name: string
	readonly path: string
	readonly category: string

	constructor({ name, path, category }: SkillProps) {
		this.name = name
		this.path = path
		this.category = category
	}

	destinationIn(destRoot: string): string {
		return join(destRoot, 'skills', this.category, this.name)
	}
}
