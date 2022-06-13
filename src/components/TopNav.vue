<template>
	<header id="heaven" class="container">
		<nav class="top_nav">
			<ul class="menu">
				<li>
					<a href="javascript:void(0);" class="active">{{ lang.about_me }}</a>
				</li>
				<li>
					<a href="#projects">{{ lang.projects }}</a>
				</li>
				<li>
					<a href="#certificates">{{ lang.certificates }}</a>
				</li>
			</ul>

			<div class="net-and-lang">
				<ul class="networks">
					<li>
						<a href="https://github.com/prinick96" target="_blank">
							<img src="/images/github.svg" />
						</a>
					</li>
					<li>
						<a href="https://www.linkedin.com/in/brayan-narváez/" target="_blank">
							<img src="/images/linkedin.svg" />
						</a>
					</li>
					<li>
						<a href="https://www.instagram.com/prinick.narvaez/" target="_blank">
							<img src="/images/instagram.svg" />
						</a>
					</li>
				</ul>
				
				<div class="switch">
					<div @click="changeLang('es')" :class="{ 'selected' : actual_lang == 'es'}">Español</div>
					<div class="js-change-lang-en" @click="changeLang('en')" :class="{ 'selected' : actual_lang == 'en'}">English</div>
				</div>
			</div>
		</nav>
	</header>
</template>

<script lang="ts">
import { defineComponent, computed } from '@vue/runtime-core'
import { useStore } from "vuex"
import { useLang } from "../utils/langs"
import top_nav from '../langs/top_nav'

export default defineComponent({
	setup() {
		const { getters, commit } = useStore();
		const actual_lang = computed(() : 'es'|'en' => {
			return getters.lang
		});
		const lang = computed(() => {
            return useLang(top_nav, actual_lang.value)
        })

		function changeLang(l : string) {
			commit('change_language', l)
		}

		return {
			actual_lang,
			lang,
			changeLang
		}
	},
})
</script>