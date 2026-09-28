import type { TranslationShape } from '../../../core/i18n/types.ts'
import type es from '../es/page_footer.ts'

const page_footer = {
  develop: 'Developed &#60;with VueJS🔥&gt;',
  back_up: '☝️ Back to top',
} satisfies TranslationShape<typeof es>

export default page_footer
