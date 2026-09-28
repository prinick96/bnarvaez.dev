import type { Locale } from '@/core/i18n/types'
import { LOCALE_PATHS } from '../../locations/constants.ts'
import en from '../../locations/en/about_me.ts'
import es from '../../locations/es/about_me.ts'
import { PROFILE_IMAGE, PROFILE_LINKS, PROFILE_NAME, SITE_URL } from '../constants.ts'

export const getPageMetadata = (locale: Locale) => {
  const copy = locale === 'en' ? en : es
  const url = SITE_URL + LOCALE_PATHS[locale]
  const title = `${PROFILE_NAME} | ${copy.develop}`
  return {
    locale,
    url,
    title,
    description: copy.meta_description,
    image: PROFILE_IMAGE,
    imageAlt: copy.photo_label,
    socialLocale: locale === 'en' ? 'en_US' : 'es_ES',
    alternateSocialLocale: locale === 'en' ? 'es_ES' : 'en_US',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'ProfilePage',
      '@id': `${url}#profile`,
      url,
      name: title,
      inLanguage: locale,
      description: copy.meta_description,
      mainEntity: {
        '@type': 'Person',
        '@id': `${SITE_URL}/#person`,
        name: PROFILE_NAME,
        url: `${SITE_URL}/`,
        image: PROFILE_IMAGE,
        jobTitle: copy.develop,
        description: copy.meta_description,
        sameAs: PROFILE_LINKS,
        knowsAbout: ['Go', 'JavaScript', 'Python', 'Software Architecture', 'LLMs', 'AI Agents', 'RAG', 'MCP'],
      },
    },
  }
}
