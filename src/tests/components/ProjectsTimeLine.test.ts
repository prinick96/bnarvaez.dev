import mockStore from '../store_mock'
import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ProjectsTimeLine from '../../components/ProjectsTimeLine.vue'
import projects_time_line from '../../langs/projects_time_line'
import projects from '../../data/projects'

describe('components/ProjectsTimeLine.vue', () => {
	const wrapper = mount(ProjectsTimeLine, {
		global: {
			plugins: [mockStore],
		}
	})

    const MAX_PROJECTS_SHOWN_BY_DEFAULT = 6
    const PROJECTS_FOR_EACH_CLICK = 4

	it('It should render', async () => {
        const div = wrapper.get('h1')
		expect(div.text()).to.equal(projects_time_line['es'].projects)
    })

    it('It should get 6 projects, after click show more button, see 10 projects', async () => {
        // get list of projects
        let div = wrapper.findAll('.time_line_section')
        expect(div.length).to.equal(MAX_PROJECTS_SHOWN_BY_DEFAULT)

        // load more click
        const button = wrapper.find('button.button')
        await button.trigger('click')

        // get projects again
        div = wrapper.findAll('.time_line_section')
        expect(div.length).to.equal(MAX_PROJECTS_SHOWN_BY_DEFAULT + PROJECTS_FOR_EACH_CLICK)
    })

    it('It should disable the load more button when the projects shown are equal to total projects', async () => {
        // count the total clicks
        const clicks = Math.ceil((projects.es.length - MAX_PROJECTS_SHOWN_BY_DEFAULT) / PROJECTS_FOR_EACH_CLICK)
        
        // get the button
        const button = wrapper.find('button.button')

        // load more clicks
        for (let i = 0; i < clicks; i++) {
            await button.trigger('click') 
        }
        
        // in this point should be disappear the load more button
        const div_button = wrapper.find('div.load_more')
        const attr = div_button.attributes()
        expect(attr.style).to.equal('display: none;') 
    })

})