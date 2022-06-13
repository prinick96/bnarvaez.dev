import mockStore from '../store_mock'
import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import LandingView from '../../views/LandingView.vue'

describe('components/LandingView.vue', () => {
	const wrapper = mount(LandingView, {
		global: {
			plugins: [mockStore],
		}
	})

	it('It should render', async () => {
        const div = wrapper.get('main')
        const attr = div.attributes()
		expect(attr.class).to.equal("LandingView_Layout")
    })

})