import type { Ref } from 'vue'
import { computed, ref } from 'vue'

export const usePagination = <T>(items: Readonly<Ref<readonly T[]>>, initialCount: number, step: number) => {
  const count = ref(initialCount)
  const visibleItems = computed(() => items.value.slice(0, count.value))
  const canLoadMore = computed(() => count.value < items.value.length)

  const loadMore = (): void => {
    count.value = Math.min(count.value + step, items.value.length)
  }

  return { visibleItems, canLoadMore, loadMore }
}
