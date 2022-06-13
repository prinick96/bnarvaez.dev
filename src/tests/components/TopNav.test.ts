import mockStore from '../store_mock'
import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TopNav from '../../components/TopNav.vue'

describe('components/TopNav.vue', () => {
	const wrapper = mount(TopNav, {
		global: {
			plugins: [mockStore],
		}
	})

	it('It should render', async () => {
        const div = wrapper.get('header')
        const attr = div.attributes()
		expect(attr.id).to.equal('heaven')
    })

	it.concurrent('It should change the language', async () => {
		let expected = '<div class="js-change-lang-en selected">English</div>'

        // get button
        let div = wrapper.find('.js-change-lang-en')
		expect(div.html()).not.to.equal(expected)

        // change lang click
        await div.trigger('click')

        // get projects again
        div = wrapper.find('div.selected')
        expect(div.html()).to.equal(expected)
    })

})