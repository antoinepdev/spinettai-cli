#!/usr/bin/env node

import { join } from 'node:path'

import { select } from 'inquirer-select-pro'
import { InstallSkills } from './application/use-cases/InstallSkills.ts'
import { LinkSkillsToAgents } from './application/use-cases/LinkSkillsToAgents.ts'
import { ScanCatalog } from './application/use-cases/ScanCatalog.ts'
import { SUPPORTED_AGENTS } from './entities/supportedAgents.ts'
import { FsCatalogReader } from './infrastructure/FsCatalogReader.ts'
import { FsSkillInstaller } from './infrastructure/FsSkillInstaller.ts'
import { FsSkillLinker } from './infrastructure/FsSkillLinker.ts'

const CONTENT_ROOT = join(import.meta.dirname, '..', 'content', 'skills')
const DEST_ROOT = process.cwd()

const scanCatalog = new ScanCatalog(new FsCatalogReader(CONTENT_ROOT))
const installSkills = new InstallSkills(new FsSkillInstaller())
const linkSkillsToAgents = new LinkSkillsToAgents(new FsSkillLinker())

const skills = scanCatalog.execute()

const selectedSkills = await select({
	message: 'Selecciona las skills que deseas instalar en el directorio actual:',
	options: skills.map((skill) => ({ name: skill.name, value: skill })),
	required: true,
})

const selectedAgents = await select({
	message: 'A qué agentes quieres dar soporte:',
	options: SUPPORTED_AGENTS.map((agent) => ({ name: agent.name, value: agent })),
	required: true,
})

installSkills.execute({ skills: selectedSkills, destRoot: DEST_ROOT })
console.log(`Skills instaladas en ${join(DEST_ROOT, 'skills')}`)

linkSkillsToAgents.execute({ skills: selectedSkills, agents: selectedAgents, destRoot: DEST_ROOT })
console.log(`Skills enlazadas en ${selectedAgents.map((agent) => agent.skillsDir(DEST_ROOT)).join(', ')}`)
