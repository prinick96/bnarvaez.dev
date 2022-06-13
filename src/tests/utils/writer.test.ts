import { describe, it, expect } from 'vitest'
import { ref, Ref } from '@vue/runtime-core'
import { useWriter } from "../../utils/writer"

describe('utils/writer.ts', () => {
	it('it should fill the string', async () => {
        const FULL_STRING_EXPECTED = 'this is a test'

		const reactive : Ref<string> = ref('')
        
        await useWriter(reactive, FULL_STRING_EXPECTED, false, 5)
        expect(reactive.value).to.equal(FULL_STRING_EXPECTED)
	})

    it.concurrent('it should fill the string with blink _', async () => {
        const FULL_STRING_FILL = 'this is a test'
        const FULL_STRING_EXPECTED = FULL_STRING_FILL + '<span class="blink">_</span>'

		const reactive : Ref<string> = ref('')

        await useWriter(reactive, FULL_STRING_FILL, true, 5)
        expect(reactive.value).to.equal(FULL_STRING_EXPECTED)
	})
})