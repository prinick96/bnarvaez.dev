import mockStore from '../store_mock'
import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import PageFooter from '../../components/PageFooter.vue'
import page_footer from '../../langs/page_footer'

describe('components/PageFooter.vue', () => {
	const wrapper = mount(PageFooter, {
		global: {
			plugins: [mockStore],
		}
	})

	it('It should render', async () => {
        const div = wrapper.get('a#heaven')
		expect(div.text()).to.equal(page_footer['es'].back_up)
    })

})