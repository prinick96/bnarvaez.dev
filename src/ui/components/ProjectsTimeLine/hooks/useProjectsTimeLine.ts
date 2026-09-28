import { computed } from 'vue'
import { usePagination } from '@/ui/hooks/usePagination'
import enProjects from '@/ui/locations/en/projects'
import esProjects from '@/ui/locations/es/projects'
import { useI18n } from '@/ui/locations/useI18n'
import { INITIAL_PROJECTS, PROJECTS_PER_PAGE } from '../constants.ts'

export const useProjectsTimeLine = () => {
  const { locale, messages } = useI18n()
  const lang = computed(() => messages.value.projects_time_line)
  const projects = computed(() => (locale.value === 'en' ? enProjects : esProjects))
  const { visibleItems, canLoadMore, loadMore } = usePagination(projects, INITIAL_PROJECTS, PROJECTS_PER_PAGE)

  return { lang, list_of_projects: visibleItems, can_load_more: canLoadMore, loadMore }
}
