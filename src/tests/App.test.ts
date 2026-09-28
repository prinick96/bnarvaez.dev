import { describe, expect, it } from 'vitest'
import { mountLocalized } from '@/tests/helpers/mountLocalized'
import App from '@/ui/app/index.vue'

describe('App', () => {
  it('renders the portfolio content', () => {
    const { wrapper } = mountLocalized(App)
    expect(wrapper.find('.__noise').exists()).toBe(true)
    expect(globalThis.document.title).toBe('Brayan Narváez | AI Engineer & Software Architect')
  })
})
