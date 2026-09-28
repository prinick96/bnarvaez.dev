<template>
  <article class="time_line__item">
    <header
      role="button"
      tabindex="0"
      :aria-expanded="open"
      :aria-controls="descriptionId"
      @click="open = !open"
      @keydown.enter="open = !open"
      @keydown.space.prevent="open = !open"
    >
      <h5>{{ p.title }}</h5>
      <small>
        {{ p.type }}<template v-if="p.from"> | 📅 {{ p.from }}<template v-if="p.to"> - {{ p.to }}</template></template>
      </small>

      <div class="arrow" :class="{ 'open' : open }">
        <span class="left-bar"></span>
        <span class="right-bar"></span>
      </div>
    </header>

    <Transition mode="out-in">
      <p :id="descriptionId" class="js-project-description" v-html="p.desc" v-show="open"></p>
    </Transition>

    <footer v-show="open">
      <ul>
        <li v-for="tech in p.techs" :key="tech">
          <TechIcon :name="tech" />
        </li>
      </ul>

      <a
        :href="p.link"
        target="_blank"
        v-if="p.link != null"
        :aria-label="lang.view_project + ': ' + p.title"
        :title="lang.view_project"
        rel="noopener noreferrer"
      >
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M10.666 1.5L1.33268 10.8333"
            stroke="#B3B3B3"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M10.666 8.34667V1.5H3.81935"
            stroke="#B3B3B3"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </a>
    </footer>
  </article>
</template>

<script setup lang="ts">
import { computed, ref, useId } from 'vue'
import TechIcon from '@/ui/components/TechIcon/index.vue'
import { useI18n } from '@/ui/locations/useI18n'
import type { ProjectProps } from './types'

defineProps<ProjectProps>()
const open = ref(false)
const descriptionId = useId()
const { messages } = useI18n()
const lang = computed(() => messages.value.projects_time_line)
</script>
