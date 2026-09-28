import type { TranslationShape } from '../../../core/i18n/types.ts'
import type es from '../es/certificates_list.ts'

const certificates_list = {
  certificates: 'Certificates',
  all: 'All my certifications in chronological order.',
  load_more: 'Load more',
  see: 'See Certificate',
} satisfies TranslationShape<typeof es>

export default certificates_list
