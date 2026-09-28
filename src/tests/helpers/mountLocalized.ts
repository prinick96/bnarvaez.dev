import { mount } from '@vue/test-utils'
import type { Component } from 'vue'
import type { Locale } from '@/core/i18n/types'
import { createI18n } from '@/ui/locations/createI18n'

export const mountLocalized = (component: Component, locale: Locale = 'es', props: Record<string, unknown> = {}) => {
  const i18n = createI18n(locale)
  const wrapper = mount(component, { props, attachTo: globalThis.document.body, global: { plugins: [i18n] } })
  return { wrapper, i18n }
}
