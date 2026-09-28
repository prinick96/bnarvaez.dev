import { describe, expect, it } from 'vitest'
import { mountLocalized } from '@/tests/helpers/mountLocalized'
import LandingView from '@/ui/pages/Home/index.vue'

describe('LandingView', () => {
  it('renders the portfolio content', () => {
    const { wrapper } = mountLocalized(LandingView)
    expect(wrapper.get('main').findAll('section')).toHaveLength(6)
  })
})
