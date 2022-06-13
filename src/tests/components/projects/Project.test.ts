import mockStore from '../../store_mock'
import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Project from '../../../components/projects/Project.vue'

describe('components/projects/Project.vue', () => {
    const mockProject = {
        title : 'test name of project',
        type: 'test',
        desc: 'test description of project',
        from: 'test',
        to: null,
        techs: ['php'],
        link: null,
    }

	const wrapper = mount(Project, {
		global: {
			plugins: [mockStore],
		},
        props: {
            p : mockProject
        }
	})

	it('It should render', async () => {
        const div = wrapper.get('h5')
		expect(div.text()).to.equal(mockProject.title)
    })

    it.concurrent('It should show the description of project', async () => {
        let div = wrapper.get('p.js-project-description')
        let attr = div.attributes()
		expect(attr.style).to.equal('display: none;')

        // button
        const header = wrapper.get('header')

        // click
        await header.trigger('click')

        // check again
        div = wrapper.get('p.js-project-description')
        attr = div.attributes()
		expect(attr.style).to.equal(undefined)
    })

})