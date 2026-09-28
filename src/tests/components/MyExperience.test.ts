import { describe, expect, it } from 'vitest'
import { mountLocalized } from '@/tests/helpers/mountLocalized'
import MyExperience from '@/ui/components/MyExperience/index.vue'

describe('MyExperience', () => {
  it('renders the portfolio content', () => {
    const { wrapper } = mountLocalized(MyExperience)
    expect(wrapper.text()).toContain('2015 - 2022')
  })
})
