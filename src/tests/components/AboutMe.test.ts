import { describe, expect, it } from 'vitest'
import { mountLocalized } from '@/tests/helpers/mountLocalized'
import AboutMe from '@/ui/components/AboutMe/index.vue'

describe('AboutMe', () => {
  it('renders the portfolio content', () => {
    const { wrapper } = mountLocalized(AboutMe)
    expect(wrapper.get('.js-web-developer').text()).toBe('AI Engineer & Software Architect')
  })
})
