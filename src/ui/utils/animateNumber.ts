import type { Ref } from 'vue'
import { wait } from '@/core/utils/wait'

export const animateNumber = async (
  target: Ref<number>,
  total: number,
  interval = 80,
  signal?: AbortSignal
): Promise<void> => {
  if (signal?.aborted) return
  target.value = 0

  const numbers = Array.from({ length: Math.max(0, Math.floor(total)) }, (_, index) => index + 1)

  for (const value of numbers) {
    if (signal?.aborted) return

    target.value = value

    await wait(interval)
  }
}
