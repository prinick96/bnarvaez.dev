<template>
  <svg
    v-if="icon"
    class="tech-icon"
    :width="icon.width"
    :height="icon.height"
    :viewBox="`0 0 ${icon.width} ${icon.height}`"
    aria-hidden="true"
    focusable="false"
  >
    <use :href="TECH_ICON_SPRITE_URL + '#' + icon.id" />
  </svg>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { TECH_ICON_SPRITE_URL, TECH_ICONS } from './constants'
import type { TechIconProps } from './types'

const props = defineProps<TechIconProps>()
const icon = computed(() => TECH_ICONS[props.name])
</script>
