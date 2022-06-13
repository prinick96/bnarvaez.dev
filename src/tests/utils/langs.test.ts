import { describe, it, expect } from 'vitest'
import { useLang } from "../../utils/langs"
import { Langs } from '../../types/langs'

describe('utils/langs.ts', () => {
    const mockLang : Langs = {
        'es' : {
            'test' : 'test en español'
        },
        'en' : {
            'test' : 'test in english'
        }
    }

	it('it should do change depend of the lang', async () => {
        let result = useLang(mockLang, 'es')
        expect(result.test).to.equal(mockLang.es.test)

        result = useLang(mockLang, 'en')
        expect(result.test).to.equal(mockLang.en.test)
	})
})