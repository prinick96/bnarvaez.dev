<template>
  <div class="squared_list">
    <div v-for="item in items" :key="item.name" class="square">
      <figure><TechIcon :name="item.icon" /></figure>
      <small>{{ item.name }}</small>
    </div>
  </div>
</template>

<script setup lang="ts">
import TechIcon from '@/ui/components/TechIcon/index.vue'
import type { SkillGridProps } from './types'

defineProps<SkillGridProps>()
</script>
