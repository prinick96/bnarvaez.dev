import type { TranslationShape } from '../../../core/i18n/types.ts'
import type es from '../es/top_nav.ts'

const top_nav = {
  about_me: 'About me',
  projects: 'Projects',
  certificates: 'Certificates',
  navigation: 'Main navigation',
  language: 'Language',
  spanish: 'Español',
  english: 'English',
} satisfies TranslationShape<typeof es>

export default top_nav
