import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { render } from '../.ssr/entry-server.js'

const template = await readFile(new URL('../dist/index.html', import.meta.url), 'utf8')
const locales = ['es', 'en']

for (const locale of locales) {
  const { html, head } = await render(locale)
  const directory = new URL(locale === 'en' ? '../dist/en/' : '../dist/', import.meta.url)
  const page = template
    .replace(/<html lang="[^"]+">/, `<html lang="${locale}">`)
    .replace(/<!--seo-start-->[\s\S]*?<!--seo-end-->/, `<!--seo-start-->${head}<!--seo-end-->`)
    .replace('<!--app-html-->', html)

  if (!page.includes('AI Engineer') || !page.includes('<main')) {
    throw new Error(`Empty prerender: ${locale}`)
  }

  await mkdir(directory, { recursive: true })
  await writeFile(new URL('index.html', directory), page)
}

console.log('Static pages generated: / and /en/')
