import mockStore from '../store_mock'
import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ProfessionalSkills from '../../components/ProfessionalSkills.vue'
import professional_skills from '../../langs/professional_skills'

describe('components/ProfessionalSkills.vue', () => {
	const wrapper = mount(ProfessionalSkills, {
		global: {
			plugins: [mockStore],
		}
	})

	it('It should render', async () => {
        const div = wrapper.get('div.js-front-tab')
		expect(div.text()).to.equal(professional_skills['es'].front)
    })

    it.concurrent('It change the tab', async () => {
        // get the tools tab button
        let div = wrapper.find('div.js-tools-tab')

        // click him
        await div.trigger('click')

        // selected should be tools
        div = wrapper.find('div.selected')
        expect(div.text()).to.equal(professional_skills['es'].tools) // 4 more
    })

})