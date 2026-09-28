import { renderToString } from '@vue/server-renderer'
import { createSSRApp } from 'vue'
import type { Locale } from '@/core/i18n/types'
import App from './app/index.vue'
import { createI18n } from './locations/createI18n.ts'
import { getPageMetadata } from './metadata/utils/getPageMetadata.ts'
import { renderMetadata } from './metadata/utils/renderMetadata.ts'

export const render = async (locale: Locale) => {
  const app = createSSRApp(App).use(createI18n(locale))

  return { html: await renderToString(app), head: renderMetadata(getPageMetadata(locale)) }
}
