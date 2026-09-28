import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { getAge } from '@/core/utils/getAge'
import { useI18n } from '@/ui/locations/useI18n'
import { animateNumber } from '@/ui/utils/animateNumber'
import { animateText } from '@/ui/utils/animateText'
import { BIRTHDAY, CAREER_START_YEAR, COMPLETED_PROJECTS, SATISFIED_CLIENTS } from '../constants.ts'

export const useAboutMe = () => {
  const { messages } = useI18n()
  const lang = computed(() => messages.value.about_me)
  const now = new Date()
  const experience = now.getFullYear() - CAREER_START_YEAR
  const years = ref(experience)
  const clients_satisfied = ref(SATISFIED_CLIENTS)
  const projects_finished = ref(COMPLETED_PROJECTS)
  const say_hello = ref(lang.value.hi)
  const love_code = ref(lang.value.love_coding)
  const years_old = getAge(BIRTHDAY, now)
  const years_of_experience = computed(() => String(years.value).padStart(2, '0'))
  const controller = new AbortController()

  const animateCounters = async (): Promise<void> => {
    await Promise.all([
      animateNumber(years, experience, 80, controller.signal),
      animateNumber(clients_satisfied, SATISFIED_CLIENTS, 5, controller.signal),
      animateNumber(projects_finished, COMPLETED_PROJECTS, 20, controller.signal),
    ])
  }

  onMounted(() => {
    const reducedMotion = globalThis.matchMedia?.('(prefers-reduced-motion: reduce)').matches

    if (!reducedMotion) void animateCounters()

    watch(
      lang,
      async (text, _, onCleanup) => {
        const textController = new AbortController()
        onCleanup(() => textController.abort())
        if (reducedMotion) {
          say_hello.value = text.hi
          love_code.value = text.love_coding
          return
        }
        await Promise.all([
          animateText(say_hello, text.hi, true, 30, textController.signal),
          animateText(love_code, text.love_coding, true, 30, textController.signal),
        ])
      },
      { immediate: true }
    )
  })

  onBeforeUnmount(() => controller.abort())

  return { lang, years_old, years_of_experience, clients_satisfied, projects_finished, say_hello, love_code }
}
