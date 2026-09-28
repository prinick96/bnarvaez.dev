import type { TranslationShape } from '../../../core/i18n/types.ts'
import type es from '../es/my_experience.ts'

const my_experience = {
  my_exp: 'My Experience',
  now: 'Present',
  freelancer: 'Freelancer',
  freelancer_exp:
    'End-to-end software development: architecture, database and infrastructure design, backend and frontend. Support from initial design through production deployment, maintenance and technical consulting.',
  bemobile: 'Bemobile',
  bemobile_exp: 'Tech Lead of the web development team.',
} satisfies TranslationShape<typeof es>

export default my_experience
