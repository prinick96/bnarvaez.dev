import { computed } from 'vue'
import type { Locale } from '@/core/i18n/types'
import { LOCALE_PATHS } from '@/ui/locations/constants'
import { useI18n } from '@/ui/locations/useI18n'

export const useTopNav = () => {
  const { locale, messages, changeLocale } = useI18n()
  const lang = computed(() => messages.value.top_nav)

  const changeLang = (nextLocale: Locale): void => {
    if (nextLocale === locale.value) return
    globalThis.history.pushState(null, '', LOCALE_PATHS[nextLocale])
    changeLocale(nextLocale)
  }

  return { lang, actual_lang: locale, changeLang }
}
