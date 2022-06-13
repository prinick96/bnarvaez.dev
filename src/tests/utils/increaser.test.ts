import { describe, it, expect } from 'vitest'
import { ref, Ref } from '@vue/runtime-core'
import { useIncreaser } from "../../utils/increaser"

describe('utils/increaser.ts', () => {
	it('it should increase the number', async () => {
        const INCREASE_EXPECTED = 10
		const reactive : Ref<number> = ref(0)
        await useIncreaser(reactive, INCREASE_EXPECTED, 5)
        expect(reactive.value).to.equal(INCREASE_EXPECTED)
	})
})