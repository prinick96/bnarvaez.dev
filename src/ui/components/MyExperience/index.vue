<template>
  <section class="container">
    <div class="experience">
      <h2>{{ lang.my_exp }}</h2>

      <div class="an_exp">
        <h3>{{ lang.bemobile }}<span class="bemobile-point">.</span></h3>
        <small>📆 2022 - {{ lang.now }}</small>
        <p>{{ lang.bemobile_exp }}</p>
      </div>

      <div class="an_exp">
        <h3>{{ lang.freelancer }}</h3>
        <small>📆 2015 - 2022</small>
        <p>{{ lang.freelancer_exp }}</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from '@/ui/locations/useI18n'

const { messages } = useI18n()
const lang = computed(() => messages.value.my_experience)
</script>
