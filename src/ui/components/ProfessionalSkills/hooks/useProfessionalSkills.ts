import { computed, ref } from 'vue'
import { useI18n } from '@/ui/locations/useI18n'
import { DEFAULT_SKILL_TAB, SKILL_CATEGORIES } from '../constants.ts'
import type { SkillTabId } from '../types.ts'
import { getNextTabIndex } from '../utils/getNextTabIndex.ts'

export const useProfessionalSkills = () => {
  const tab = ref<SkillTabId>(DEFAULT_SKILL_TAB)
  const { messages } = useI18n()
  const lang = computed(() => messages.value.professional_skills)

  const navigateTabs = (event: KeyboardEvent, index: number): void => {
    const nextIndex = getNextTabIndex(event.key, index, SKILL_CATEGORIES.length)
    if (nextIndex === null) return

    const nextTab = SKILL_CATEGORIES[nextIndex]
    if (!nextTab) return

    event.preventDefault()

    tab.value = nextTab.id
    const target = event.currentTarget

    if (target instanceof HTMLElement) {
      target.closest('[role="tablist"]')?.querySelector<HTMLButtonElement>(`#skills-tab-${tab.value}`)?.focus()
    }
  }

  return { tabs: SKILL_CATEGORIES, tab, lang, navigateTabs }
}
