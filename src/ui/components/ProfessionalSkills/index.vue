<template>
  <section class="container" :aria-label="lang.title">
    <div class="professional_skills">
      <div class="switch" role="tablist" :aria-label="lang.title">
        <button
          v-for="(item, index) in tabs"
          :key="item.id"
          :id="'skills-tab-' + item.id"
          type="button"
          role="tab"
          :aria-selected="tab === item.id"
          :aria-controls="'skills-panel-' + item.id"
          :tabindex="tab === item.id ? 0 : -1"
          :class="{ selected: tab === item.id }"
          @click="tab = item.id"
          @keydown="navigateTabs($event, index)"
        >
          {{ lang[item.label] }}
        </button>
      </div>

      <div
        v-for="item in tabs"
        :key="item.id"
        :id="'skills-panel-' + item.id"
        class="skills_panel"
        role="tabpanel"
        :aria-labelledby="'skills-tab-' + item.id"
        :hidden="tab !== item.id"
      >
        <SkillGrid :items="item.items" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useProfessionalSkills } from './hooks/useProfessionalSkills'
import SkillGrid from './SkillGrid/index.vue'

const { tabs, tab, lang, navigateTabs } = useProfessionalSkills()
</script>
