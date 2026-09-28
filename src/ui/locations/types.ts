import type { ComputedRef, Ref } from 'vue'
import type { Locale } from '@/core/i18n/types'
import type es from './es/dictionary.ts'

export type Dictionary = typeof es

export interface I18nContext {
  readonly locale: Readonly<Ref<Locale>>
  readonly messages: ComputedRef<Dictionary>
  readonly changeLocale: (locale: Locale) => void
}
