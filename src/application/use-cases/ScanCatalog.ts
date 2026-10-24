import type { Skill } from '../../entities/Skill.ts'
import type { ICatalogReader } from '../interfaces/ICatalogReader.ts'

export class ScanCatalog {
	readonly #reader: ICatalogReader

	constructor(reader: ICatalogReader) {
		this.#reader = reader
	}

	execute(): Skill[] {
		return this.#reader.read()
	}
}
