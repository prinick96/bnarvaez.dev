<template>
  <section id="projects" class="container projects-border">
    <div class="projects">
      <h2>{{ lang.projects }}</h2>
      <p>{{ lang.a_line }}</p>

      <div class="time_line">
        <div class="time_line_section" v-for="(p, i) in list_of_projects" :key="i">
          <Project :p="p" />
        </div>
      </div>

      <div class="load_more" v-show="can_load_more">
        <button class="button" @click="loadMore">{{ lang.load_more }}</button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useProjectsTimeLine } from './hooks/useProjectsTimeLine'
import Project from './Project/index.vue'

const { lang, list_of_projects, can_load_more, loadMore } = useProjectsTimeLine()
</script>
