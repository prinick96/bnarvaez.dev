import type { Ref } from 'vue'
import { wait } from '@/core/utils/wait'

export const animateText = async (
  target: Ref<string>,
  text: string,
  blink = false,
  interval = 30,
  signal?: AbortSignal
): Promise<void> => {
  if (signal?.aborted) return
  target.value = ''

  for (const character of text) {
    await wait(interval)

    if (signal?.aborted) return

    target.value += character
  }

  if (blink && text) target.value += '<span class="blink">_</span>'
}
