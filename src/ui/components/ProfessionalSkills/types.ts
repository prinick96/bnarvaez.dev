export type SkillTabId = 'ai' | 'design' | 'back_end' | 'front_end' | 'db' | 'tools' | 'test'
export type SkillTabLabel = 'ai' | 'design' | 'back' | 'front' | 'db' | 'tools' | 'test'

export interface SkillItem {
  readonly icon: string
  readonly name: string
}
export interface SkillCategory {
  readonly id: SkillTabId
  readonly label: SkillTabLabel
  readonly items: readonly SkillItem[]
}
