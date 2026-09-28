import { describe, expect, it } from 'vitest'
import { mountLocalized } from '@/tests/helpers/mountLocalized'
import Project from '@/ui/components/ProjectsTimeLine/Project/index.vue'

describe('Project', () => {
  const project = {
    title: 'Velia',
    type: 'En desarrollo',
    desc: 'IA aplicada',
    from: null,
    to: null,
    techs: ['go'],
    link: null,
  }
  it('renders a private project without links or invented dates', () => {
    const { wrapper } = mountLocalized(Project, 'es', { p: project })
    expect(wrapper.get('h5').text()).toBe(project.title)
    expect(wrapper.findAll('a')).toHaveLength(0)
    expect(wrapper.get('small').text()).not.toContain('📅')
  })
  it('opens the description with the keyboard', async () => {
    const { wrapper } = mountLocalized(Project, 'es', { p: project })
    expect(wrapper.get('.js-project-description').isVisible()).toBe(false)
    await wrapper.get('header').trigger('keydown', { key: 'Enter' })
    expect(wrapper.get('.js-project-description').isVisible()).toBe(true)
    expect(wrapper.get('header').attributes('aria-expanded')).toBe('true')
  })
})
