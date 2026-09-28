import { describe, expect, it } from 'vitest'
import { mountLocalized } from '@/tests/helpers/mountLocalized'
import SoftSkills from '@/ui/components/SoftSkills/index.vue'

describe('SoftSkills', () => {
  it('renders the portfolio content', () => {
    const { wrapper } = mountLocalized(SoftSkills)
    expect(wrapper.get('.soft_skills_title').text()).toBe('Habilidades')
  })
})
