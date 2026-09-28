import { describe, expect, it } from 'vitest'
import { ref } from 'vue'
import { animateNumber } from '@/ui/utils/animateNumber'

describe('utils/increaser.ts', () => {
  it('it should increase the number', async () => {
    const INCREASE_EXPECTED = 10
    const reactive = ref(0)
    await animateNumber(reactive, INCREASE_EXPECTED, 5)
    expect(reactive.value).to.equal(INCREASE_EXPECTED)
  })
})
