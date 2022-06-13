import mockStore from '../store_mock'
import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import about_me from '../../langs/about_me'
import AboutMe from '../../components/AboutMe.vue'

describe('components/AboutMe.vue', () => {
	const wrapper = mount(AboutMe, {
		global: {
			plugins: [mockStore],
		}
	})

	it('It should render', async () => {
        const div = wrapper.get('h1.js-web-developer')
		expect(div.text()).to.equal(about_me.es.develop)
    })

})