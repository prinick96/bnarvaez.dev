import { createApp, createSSRApp } from 'vue'
import App from './app/index.vue'
import { createI18n } from './locations/createI18n.ts'
import { resolveLocale } from './locations/utils/resolveLocale.ts'
import './styles/main.scss'

const root = globalThis.document.querySelector('#__vue3')
const create = root?.childElementCount ? createSSRApp : createApp
const locale = resolveLocale(globalThis.location.pathname)

create(App).use(createI18n(locale)).mount('#__vue3')
