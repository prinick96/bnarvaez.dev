import { inject } from 'vue'
import { I18N_KEY } from './constants.ts'
import type { I18nContext } from './types.ts'

export const useI18n = (): I18nContext => {
  const context = inject(I18N_KEY)
  if (!context) throw new Error('The i18n plugin must be installed before rendering the application.')
  return context
}
