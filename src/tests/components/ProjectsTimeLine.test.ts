import { describe, expect, it } from 'vitest'
import { mountLocalized } from '@/tests/helpers/mountLocalized'
import ProjectsTimeLine from '@/ui/components/ProjectsTimeLine/index.vue'
import items from '@/ui/locations/es/projects'

describe('ProjectsTimeLine', () => {
  it('renders the first page', () => {
    const { wrapper } = mountLocalized(ProjectsTimeLine)
    expect(wrapper.findAll('.time_line_section')).toHaveLength(6)
  })
  it('loads the next page', async () => {
    const { wrapper } = mountLocalized(ProjectsTimeLine)
    await wrapper.get('button.button').trigger('click')
    expect(wrapper.findAll('.time_line_section')).toHaveLength(10)
  })
  it('stops at the last item and hides the load button', async () => {
    const { wrapper } = mountLocalized(ProjectsTimeLine)
    const pages = Math.ceil((items.length - 6) / 4)
    for (const page of Array.from({ length: pages }, (_, index) => index + 1)) {
      await wrapper.get('button.button').trigger('click')
      expect(wrapper.findAll('.time_line_section')).toHaveLength(Math.min(6 + page * 4, items.length))
    }
    expect(wrapper.get('.load_more').isVisible()).toBe(false)
  })
})
