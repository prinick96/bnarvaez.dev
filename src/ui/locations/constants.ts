import type { InjectionKey } from 'vue'
import type { Locale } from '@/core/i18n/types'
import type { I18nContext } from './types.ts'

export const I18N_KEY: InjectionKey<I18nContext> = Symbol('i18n')
export const LOCALE_PATHS: Readonly<Record<Locale, string>> = { es: '/', en: '/en/' }
