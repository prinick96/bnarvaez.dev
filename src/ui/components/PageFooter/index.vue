<template>
  <footer class="container">
    <div class="footer">
      <small v-html="lang.develop"></small>
      <a href="#heaven">{{ lang.back_up }}</a>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from '@/ui/locations/useI18n'

const { messages } = useI18n()
const lang = computed(() => messages.value.page_footer)
</script>
