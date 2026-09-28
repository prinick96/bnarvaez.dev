import type { Locale } from '@/core/i18n/types'

export const resolveLocale = (pathname: string): Locale => (/^\/en(?:\/|$)/.test(pathname) ? 'en' : 'es')
