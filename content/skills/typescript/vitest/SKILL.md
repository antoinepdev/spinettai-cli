---
name: vitest
description: Reglas para escribir o revisar tests con el framework Vitest. Usa esta skill solo cuando el trabajo sea específicamente con Vitest: se mencione Vitest, haya configuración de Vitest, o se usen describe, it, test, it.for o la API de Vitest (expect, beforeEach, vi.*).
---

# Vitest

Reglas para escribir tests con Vitest. Se aplican siempre salvo que el usuario indique lo contrario.

- Todo archivo de test DEBE llevar `.test` en su nombre. Ejemplo: `example.test.ts`.
- Dentro de un `describe` usa `it`; fuera de un `describe` usa `test`.
- Siempre que se puedan agrupar cases, DEBE usar `it.for` con casos objeto `{}` y su generic de tipado.
