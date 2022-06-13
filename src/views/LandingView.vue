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

<script lang="ts">
import { defineComponent } from "@vue/runtime-core"
import AboutMe from "../components/AboutMe.vue"
import MyExperience from "../components/MyExperience.vue"
import SoftSkills from "../components/SoftSkills.vue"
import ProfessionalSkills from "../components/ProfessionalSkills.vue"
import ProjectsTimeLine from "../components/ProjectsTimeLine.vue"
import CertificatesList from "../components/CertificatesList.vue"

export default defineComponent({
	components: {
		AboutMe,
		MyExperience,
		SoftSkills,
		ProfessionalSkills,
		ProjectsTimeLine,
		CertificatesList,
	}
});
</script>