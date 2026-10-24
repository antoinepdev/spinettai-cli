---
name: classes
description: Reglas para escribir clases en TypeScript. Úsala siempre que escribas, analices o refactorices una clase: se mencione una class, sus propiedades, el constructor o la encapsulación con # o private.
---

# Classes

Reglas para escribir clases en TypeScript. Se aplican siempre salvo que el usuario indique lo contrario.

- Usa un único parámetro objeto (`{ ... }`) en el constructor solo si recibe más de un parámetro. Si recibe uno o ninguno, pásalo como parámetro posicional.
- Siempre tipa las propiedades del constructor y añádeles `readonly`, a menos que la propiedad se modifique realmente dentro de la clase.
- Todas las propiedades de la clase DEBEN ser privadas con `#`, a menos que se lean fuera de la clase.
- Nunca uses `private` para declarar una propiedad privada; usa siempre la almohadilla (`#`).

## Ejemplo

```typescript
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
```
