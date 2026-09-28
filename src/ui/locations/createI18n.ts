import type { App } from 'vue'
import { computed, readonly, ref } from 'vue'
import type { Locale } from '@/core/i18n/types'
import { I18N_KEY } from './constants.ts'
import en from './en/dictionary.ts'
import es from './es/dictionary.ts'
import type { I18nContext } from './types.ts'

export const createI18n = (initialLocale: Locale = 'es') => {
  const locale = ref<Locale>(initialLocale)
  const messages = computed(() => (locale.value === 'en' ? en : es))

  const changeLocale = (nextLocale: Locale): void => {
    locale.value = nextLocale
  }

  const context: I18nContext = { locale: readonly(locale), messages, changeLocale }

  return {
    ...context,
    install(app: App): void {
      app.provide(I18N_KEY, context)
    },
  }
}
