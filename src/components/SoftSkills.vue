<template>
    <section class="container">
        <div class="soft_skills">
            
            <div class="soft_skills_title">
                {{ lang.skills }}
            </div>

            <div class="soft_skills_lines">

                <div class="words">
                    <span>{{ lang.resp }}</span>
                    <span>{{ lang.dec }}</span>
                    <span>{{ lang.team }}</span>
                    <span>{{ lang.pro }}</span>
                    <span>{{ lang.eng }}</span>
                </div>

            </div>

        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent, computed } from '@vue/runtime-core'
import { useStore } from "vuex"
import { useLang } from "../utils/langs"
import soft_skills from '../langs/soft_skills'
  
export default defineComponent({
    setup() {
        const { getters } = useStore();
        const lang = computed(() => {
            return useLang(soft_skills, getters.lang)
        })

        return {
            lang
        };
    },
})
</script>