<template>
  <div class="__noise"></div>
  <TopNav />
  <LandingView />
  <SimplyFooter />
</template>

<script setup lang="ts">
import SimplyFooter from '@/ui/components/PageFooter/index.vue'
import TopNav from '@/ui/components/TopNav/index.vue'
import { usePageMetadata } from '@/ui/hooks/usePageMetadata'
import LandingView from '@/ui/pages/Home/index.vue'

usePageMetadata()
</script>
