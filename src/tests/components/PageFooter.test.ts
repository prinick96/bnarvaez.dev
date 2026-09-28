import { describe, expect, it } from 'vitest'
import { mountLocalized } from '@/tests/helpers/mountLocalized'
import PageFooter from '@/ui/components/PageFooter/index.vue'

describe('PageFooter', () => {
  it('renders the portfolio content', () => {
    const { wrapper } = mountLocalized(PageFooter)
    expect(wrapper.get('footer').text()).toContain('VueJS')
  })
})
