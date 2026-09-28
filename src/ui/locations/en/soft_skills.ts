import type { TranslationShape } from '../../../core/i18n/types.ts'
import type es from '../es/soft_skills.ts'

const soft_skills = {
  skills: 'Soft Skills',
  resp: 'Technical leadership',
  dec: 'Problem solving',
  team: 'Teamwork',
  pro: 'Proactive',
  eng: 'Quality',
} satisfies TranslationShape<typeof es>

export default soft_skills
