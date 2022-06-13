import mockStore from '../store_mock'
import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import soft_skills from '../../langs/soft_skills'
import SoftSkills from '../../components/SoftSkills.vue'

describe('components/SoftSkills.vue', () => {
	const wrapper = mount(SoftSkills, {
		global: {
			plugins: [mockStore],
		}
	})

	it('It should render', async () => {
        const div = wrapper.get('.soft_skills_title')
		expect(div.text()).to.equal(soft_skills['es'].skills)
    })

})