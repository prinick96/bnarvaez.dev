<template>
	<div class="__noise"></div>
	<TopNav />
	<LandingView />
	<SimplyFooter />
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import LandingView from "./views/LandingView.vue"
import TopNav from "./components/TopNav.vue"
import SimplyFooter from "./components/PageFooter.vue"

export default defineComponent({
	components: {
		TopNav,
		LandingView,
		SimplyFooter
	}
});
</script>