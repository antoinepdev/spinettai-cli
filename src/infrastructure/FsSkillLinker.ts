import { lstatSync, mkdirSync, rmSync, symlinkSync } from 'node:fs'
import type { ISkillLinker } from '../application/interfaces/ISkillLinker.ts'
import type { Agent } from '../entities/Agent.ts'
import type { Skill } from '../entities/Skill.ts'

export class FsSkillLinker implements ISkillLinker {
	link(skills: Skill[], agents: Agent[], destRoot: string): void {
		for (const agent of agents) {
			const agentSkillsDir = agent.skillsDir(destRoot)
			mkdirSync(agentSkillsDir, { recursive: true })

			for (const skill of skills) {
				const link = agent.linkPathFor(skill, destRoot)
				const target = agent.linkTargetFor(skill, destRoot)

				if (lstatSync(link, { throwIfNoEntry: false })) {
					rmSync(link, { recursive: true, force: true })
				}

				symlinkSync(target, link, 'dir')
			}
		}
	}
}
