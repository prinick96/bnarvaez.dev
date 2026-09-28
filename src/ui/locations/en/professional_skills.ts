import type { TranslationShape } from '../../../core/i18n/types.ts'
import type es from '../es/professional_skills.ts'

const professional_skills = {
  title: 'Technologies and skills',
  ai: 'Applied AI',
  design: 'Architecture',
  back: 'Backend',
  front: 'Frontend',
  db: 'Data',
  tools: 'Tools',
  test: 'Quality & LLMOps',
} satisfies TranslationShape<typeof es>

export default professional_skills
