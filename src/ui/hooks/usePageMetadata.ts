import { onBeforeUnmount, onMounted, watchEffect } from 'vue'
import { useI18n } from '@/ui/locations/useI18n'
import { resolveLocale } from '@/ui/locations/utils/resolveLocale'
import { getPageMetadata } from '@/ui/metadata/utils/getPageMetadata'

export const usePageMetadata = (): void => {
  const { locale, changeLocale } = useI18n()
  const followHistory = (): void => changeLocale(resolveLocale(globalThis.location.pathname))

  onMounted(() => globalThis.addEventListener('popstate', followHistory))

  onBeforeUnmount(() => globalThis.removeEventListener('popstate', followHistory))

  watchEffect(() => {
    if (globalThis.document === undefined) return

    const page = getPageMetadata(locale.value)

    globalThis.document.title = page.title

    globalThis.document.documentElement.lang = page.locale

    const canonical = globalThis.document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (canonical) canonical.href = page.url

    const schema = globalThis.document.querySelector('#profile-schema')
    if (schema) schema.textContent = JSON.stringify(page.schema)

    const values = {
      'meta[name="description"], meta[property="og:description"], meta[name="twitter:description"]': page.description,
      'meta[property="og:title"], meta[name="twitter:title"]': page.title,
      'meta[property="og:url"]': page.url,
      'meta[property="og:locale"]': page.socialLocale,
      'meta[property="og:locale:alternate"]': page.alternateSocialLocale,
      'meta[property="og:image:alt"], meta[name="twitter:image:alt"]': page.imageAlt,
    }

    for (const [selector, content] of Object.entries(values)) {
      globalThis.document.querySelectorAll<HTMLMetaElement>(selector).forEach((meta) => {
        meta.content = content
      })
    }
  })
}
