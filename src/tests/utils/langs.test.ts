import { describe, expect, it } from 'vitest'
import { createI18n } from '@/ui/locations/createI18n'

describe('i18n', () => {
  it('keeps locales isolated between application instances', () => {
    const first = createI18n('es')
    const second = createI18n('es')
    first.changeLocale('en')
    expect(first.messages.value.professional_skills.ai).toBe('Applied AI')
    expect(second.messages.value.professional_skills.ai).toBe('IA aplicada')
  })
})
