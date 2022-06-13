import mockStore from './store_mock'
import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import App from '../App.vue'

describe('App.vue', () => {
	const wrapper = mount(App, {
		global: {
			plugins: [mockStore],
		}
	})

	it('it should render __noise div class', async () => {
		const div = wrapper.get('div.__noise')
		expect(div.html()).to.equal('<div class="__noise"></div>')
	})
})