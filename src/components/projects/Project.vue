<template>
  <article class="time_line__item">
	<header @click="open = !open">
	  <h5>{{ p.title }}</h5>
	  <small v-if="p.to != null"
		>{{ p.type }} | 📅 {{ p.from }} - {{ p.to }}</small
	  >
	  <small v-else>{{ p.type }} | 📅 {{ p.from }}</small>

	  <div class="arrow" :class="{ 'open' : open }">
		<span class="left-bar"></span>
  		<span class="right-bar"></span>
	  </div>
	</header>

	<Transition mode="out-in">
		<p class="js-project-description" v-html="p.desc" v-show="open"></p>
	</Transition>

	<footer v-show="open">
	  <ul>
		<li v-for="(tech, j) in p.techs" :key="j">
		  <img :src="'/images/tech/' + tech + '.png'" />
		</li>
	  </ul>

	  <a
		:href="p.link"
		target="_blank"
		v-if="p.link != null"
		alt="Ver proyecto"
		title="Ver proyecto"
	  >
		<svg
		  width="12"
		  height="12"
		  viewBox="0 0 12 12"
		  fill="none"
		  xmlns="http://www.w3.org/2000/svg"
		>
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

<script lang="ts">
import { defineComponent, Ref, ref } from "@vue/runtime-core";

export default defineComponent({
  props: {
	p: {
	  type: Object,
	  required: true,
	},
  },
  setup() {
	const open : Ref<boolean> = ref(false)
	return {
		open
	};
  },
});
</script>