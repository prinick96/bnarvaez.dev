import { fileURLToPath, URL } from 'node:url'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vitest/config'
import { resolveLocale } from './src/ui/locations/utils/resolveLocale.ts'
import { getPageMetadata } from './src/ui/metadata/utils/getPageMetadata.ts'
import { renderMetadata } from './src/ui/metadata/utils/renderMetadata.ts'

export default defineConfig({
  plugins: [
    vue(),
    {
      name: 'localized-metadata',
      transformIndexHtml(html, context) {
        const locale = resolveLocale(context.path)
        return html
          .replace('<html lang="es">', `<html lang="${locale}">`)
          .replace(
            /<!--seo-start-->[\s\S]*?<!--seo-end-->/,
            `<!--seo-start-->${renderMetadata(getPageMetadata(locale))}<!--seo-end-->`
          )
      },
    },
  ],
  resolve: { alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) } },
  server: { port: 3000 },
  test: {
    environment: 'happy-dom',
    include: ['src/tests/**/*.test.ts'],
    setupFiles: ['./src/tests/setup.ts'],
    coverage: { provider: 'v8', include: ['src/core/**/*.ts', 'src/ui/**/*.ts', 'src/ui/**/*.vue'] },
  },
})
