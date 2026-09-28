import { computed } from 'vue'
import certificates from '@/core/data/certificates'
import { usePagination } from '@/ui/hooks/usePagination'
import { useI18n } from '@/ui/locations/useI18n'
import { CERTIFICATES_PER_PAGE, INITIAL_CERTIFICATES } from '../constants.ts'

export const useCertificatesList = () => {
  const { messages } = useI18n()
  const lang = computed(() => messages.value.certificates_list)
  const items = computed(() => certificates)
  const { visibleItems, canLoadMore, loadMore } = usePagination(items, INITIAL_CERTIFICATES, CERTIFICATES_PER_PAGE)

  return { lang, list_of_certificates: visibleItems, can_load_more: canLoadMore, loadMore }
}
