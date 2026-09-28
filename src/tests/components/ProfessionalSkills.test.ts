import { describe, expect, it } from 'vitest'
import { mountLocalized } from '@/tests/helpers/mountLocalized'
import ProfessionalSkills from '@/ui/components/ProfessionalSkills/index.vue'

describe('ProfessionalSkills', () => {
  it('opens Applied AI by default', () => {
    const { wrapper } = mountLocalized(ProfessionalSkills)
    expect(wrapper.findAll('[role="tab"]')).toHaveLength(7)
    expect(wrapper.get('[role="tab"][aria-selected="true"]').text()).toBe('IA aplicada')
    expect(wrapper.findAll('[role="tabpanel"]:not([hidden])')).toHaveLength(1)
    expect(wrapper.get('#skills-panel-ai').text()).toContain('LangGraph')
  })
  it('selects each category with one visible panel', async () => {
    const { wrapper } = mountLocalized(ProfessionalSkills)
    for (const tab of wrapper.findAll('[role="tab"]')) {
      await tab.trigger('click')
      expect(wrapper.get('[role="tabpanel"]:not([hidden])').attributes('id')).toBe(tab.attributes('aria-controls'))
      expect(wrapper.findAll('[role="tab"][tabindex="0"]')).toHaveLength(1)
    }
  })
  it('moves selection and focus with the keyboard', async () => {
    const { wrapper } = mountLocalized(ProfessionalSkills)
    const steps = [
      { key: 'ArrowLeft', target: 'test' },
      { key: 'ArrowRight', target: 'ai' },
      { key: 'ArrowRight', target: 'design' },
      { key: 'End', target: 'test' },
      { key: 'Home', target: 'ai' },
    ]
    for (const step of steps) {
      await wrapper.get('[role="tab"][aria-selected="true"]').trigger('keydown', { key: step.key })
      const target = wrapper.get('#skills-tab-' + step.target)
      expect(target.attributes('aria-selected')).toBe('true')
      expect(globalThis.document.activeElement).toBe(target.element)
    }
  })
  it('translates labels without resetting selection', async () => {
    const { wrapper, i18n } = mountLocalized(ProfessionalSkills)
    await wrapper.get('#skills-tab-test').trigger('click')
    i18n.changeLocale('en')
    await wrapper.vm.$nextTick()
    expect(wrapper.get('[role="tab"][aria-selected="true"]').text()).toBe('Quality & LLMOps')
    expect(wrapper.get('[role="tabpanel"]:not([hidden])').attributes('id')).toBe('skills-panel-test')
    i18n.changeLocale('es')
    await wrapper.vm.$nextTick()
    expect(wrapper.get('[role="tab"][aria-selected="true"]').text()).toBe('Calidad y LLMOps')
  })
})
