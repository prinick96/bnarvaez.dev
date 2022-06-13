<template>
    <section class="container">
        <div class="experience">
            <h3>{{ lang.my_exp }}</h3>
            <h1>{{ lang.freelancer }}</h1>
            <small>📆 2015 - {{ lang.now }}</small>
            <p>{{ lang.all_my_exp }}</p>
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent, computed } from '@vue/runtime-core'
import { useStore } from "vuex"
import { useLang } from "../utils/langs"
import my_experience from '../langs/my_experience'

export default defineComponent({
    setup() {
        const { getters } = useStore();
        const lang = computed(() => {
            return useLang(my_experience, getters.lang)
        })

        return {
            lang
        };
    },
})
</script>