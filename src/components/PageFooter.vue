<template>
    <footer class="container">
        <div class="footer">
            <small v-html="lang.develop"></small>
            <a href="#heaven">{{ lang.back_up }}</a>
        </div>
    </footer>
</template>

<script lang="ts">
import { defineComponent, computed } from '@vue/runtime-core'
import { useStore } from "vuex"
import { useLang } from "../utils/langs"
import page_footer from '../langs/page_footer'

export default defineComponent({
    setup() {
        const { getters } = useStore();
        const lang = computed(() => {
            return useLang(page_footer, getters.lang)
        })

        return {
            lang
        };
    },
})
</script>