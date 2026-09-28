import { escapeHtml } from '../../../core/utils/escapeHtml.ts'
import { SITE_URL } from '../constants.ts'
import type { PageMetadata } from '../types.ts'

export const renderMetadata = (page: PageMetadata): string => `
<title>${escapeHtml(page.title)}</title>
<meta name="description" content="${escapeHtml(page.description)}" />
<link rel="canonical" href="${page.url}" />
<link rel="alternate" hreflang="es" href="${SITE_URL}/" />
<link rel="alternate" hreflang="en" href="${SITE_URL}/en/" />
<link rel="alternate" hreflang="x-default" href="${SITE_URL}/" />
<meta property="og:type" content="profile" />
<meta property="og:site_name" content="Brayan Narváez" />
<meta property="og:title" content="${escapeHtml(page.title)}" />
<meta property="og:description" content="${escapeHtml(page.description)}" />
<meta property="og:url" content="${page.url}" />
<meta property="og:locale" content="${page.socialLocale}" />
<meta property="og:locale:alternate" content="${page.alternateSocialLocale}" />
<meta property="og:image" content="${page.image}" />
<meta property="og:image:alt" content="${escapeHtml(page.imageAlt)}" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:creator" content="@prin1ck" />
<meta name="twitter:title" content="${escapeHtml(page.title)}" />
<meta name="twitter:description" content="${escapeHtml(page.description)}" />
<meta name="twitter:image" content="${page.image}" />
<meta name="twitter:image:alt" content="${escapeHtml(page.imageAlt)}" />
<script id="profile-schema" type="application/ld+json">${JSON.stringify(page.schema).replaceAll('<', '\\u003c')}</script>
`
