import { describe, expect, it } from 'vitest'
import { mountLocalized } from '@/tests/helpers/mountLocalized'
import TopNav from '@/ui/components/TopNav/index.vue'

describe('TopNav', () => {
  it('renders crawlable language links', () => {
    const { wrapper } = mountLocalized(TopNav)
    expect(wrapper.get('header').attributes('id')).toBe('heaven')
    expect(wrapper.get('.js-change-lang-en').attributes('href')).toBe('/en/')
    expect(wrapper.findAll('.menu a').map((link) => link.attributes('aria-label'))).toEqual([
      'Sobre Mí',
      'Proyectos',
      'Certificados',
    ])
  })
  it('changes language and URL together', async () => {
    const { wrapper, i18n } = mountLocalized(TopNav)
    await wrapper.get('.js-change-lang-en').trigger('click')
    expect(i18n.locale.value).toBe('en')
    expect(wrapper.get('.js-change-lang-en').attributes('aria-current')).toBe('page')
    expect(globalThis.location.pathname).toBe('/en/')
    expect(wrapper.get('.menu a[href="#projects"]').attributes('aria-label')).toBe('Projects')
  })
})
