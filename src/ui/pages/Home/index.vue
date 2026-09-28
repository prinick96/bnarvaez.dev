<template>
  <main class="LandingView_Layout">
    <AboutMe />
    <MyExperience />
    <SoftSkills />
    <ProfessionalSkills />
    <ProjectsTimeLine />
    <CertificatesList />
  </main>
</template>

<script setup lang="ts">
import AboutMe from '@/ui/components/AboutMe/index.vue'
import CertificatesList from '@/ui/components/CertificatesList/index.vue'
import MyExperience from '@/ui/components/MyExperience/index.vue'
import ProfessionalSkills from '@/ui/components/ProfessionalSkills/index.vue'
import ProjectsTimeLine from '@/ui/components/ProjectsTimeLine/index.vue'
import SoftSkills from '@/ui/components/SoftSkills/index.vue'
</script>
