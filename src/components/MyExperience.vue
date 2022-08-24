<template>
    <section class="container">
        <div class="experience">
            <h3>{{ lang.my_exp }}</h3>

            <div class="an_exp">
                <h1>{{ lang.bemobile }}<span class="bemobile-point">.</span></h1>
                <small>📆 2022 - {{ lang.now }}</small>
                <p>{{ lang.bemobile_exp }}</p>
            </div>

            <div class="an_exp">
                <h1>{{ lang.freelancer }}</h1>
                <small>📆 2015 - 2022</small>
                <p>{{ lang.freelancer_exp }}</p>
            </div>
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