<template>
  <section class="container">
    <div class="soft_skills">
      <div class="soft_skills_title">
        {{ lang.skills }}
      </div>

      <div class="soft_skills_lines">
        <div class="words">
          <span>{{ lang.resp }}</span>
          <span>{{ lang.dec }}</span>
          <span>{{ lang.team }}</span>
          <span>{{ lang.pro }}</span>
          <span>{{ lang.eng }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from '@/ui/locations/useI18n'

const { messages } = useI18n()
const lang = computed(() => messages.value.soft_skills)
</script>
