import type { TranslationShape } from '../../../core/i18n/types.ts'
import type es from '../es/projects_time_line.ts'

const projects_time_line = {
  projects: 'Projects',
  a_line: 'A timeline of projects I have worked on.',
  load_more: 'Load more',
  view_project: 'View project',
} satisfies TranslationShape<typeof es>

export default projects_time_line
