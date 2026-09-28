import { describe, expect, it } from 'vitest'
import items from '@/core/data/certificates'
import { mountLocalized } from '@/tests/helpers/mountLocalized'
import CertificatesList from '@/ui/components/CertificatesList/index.vue'

describe('CertificatesList', () => {
  it('renders the first page', () => {
    const { wrapper } = mountLocalized(CertificatesList)
    expect(wrapper.findAll('.certified')).toHaveLength(5)
  })
  it('loads the next page', async () => {
    const { wrapper } = mountLocalized(CertificatesList)
    await wrapper.get('button.button').trigger('click')
    expect(wrapper.findAll('.certified')).toHaveLength(9)
  })
  it('stops at the last item and hides the load button', async () => {
    const { wrapper } = mountLocalized(CertificatesList)
    const pages = Math.ceil((items.length - 5) / 4)
    for (const page of Array.from({ length: pages }, (_, index) => index + 1)) {
      await wrapper.get('button.button').trigger('click')
      expect(wrapper.findAll('.certified')).toHaveLength(Math.min(5 + page * 4, items.length))
    }
    expect(wrapper.get('.load_more').isVisible()).toBe(false)
  })
})
