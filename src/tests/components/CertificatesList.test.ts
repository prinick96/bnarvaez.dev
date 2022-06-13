import mockStore from '../store_mock'
import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import CertificatesList from '../../components/CertificatesList.vue'
import certificates_list from '../../langs/certificates_list'
import certificates from '../../data/certificates'

describe('components/CertificatesList.vue', () => {
	const wrapper = mount(CertificatesList, {
		global: {
			plugins: [mockStore],
		}
	})

    const MAX_CERTIFICATES_SHOWN_BY_DEFAULT = 5
    const CERTIFICATES_FOR_EACH_CLICK = 4

	it('It should render', async () => {
        const div = wrapper.get('h1')
		expect(div.text()).to.equal(certificates_list['es'].certificates)
    })

    it('It should get 6 certificates, after click show more button, see 10 certificates', async () => {
        // get list of certificates
        let div = wrapper.findAll('.certified')
        expect(div.length).to.equal(MAX_CERTIFICATES_SHOWN_BY_DEFAULT) // 5 first

        // load more click
        const button = wrapper.find('button.button')
        await button.trigger('click')

        // get certificates again
        div = wrapper.findAll('.certified')
        expect(div.length).to.equal(MAX_CERTIFICATES_SHOWN_BY_DEFAULT + CERTIFICATES_FOR_EACH_CLICK) // 4 more
    })

    it('It should disable the load more button when the certificates shown are equal to total certificates', async () => {
        // count the total clicks
        const clicks = Math.ceil((certificates.length - MAX_CERTIFICATES_SHOWN_BY_DEFAULT) / CERTIFICATES_FOR_EACH_CLICK)
        
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