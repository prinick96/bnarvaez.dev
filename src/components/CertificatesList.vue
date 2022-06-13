<template>
    <section id="certificates" class="container">
        <div class="certificates">
            <h1>{{ lang.certificates }}</h1>
            <p>{{ lang.all }}</p>

            <div class="list-of-certificates">
                <div class="certified" v-for="c, i in list_of_certificates" :key="i">
                    <figure>
                        <img :src="'/images/certifiers/'+ c.image + '.png'" />
                    </figure>
                    <div class="certified_content">
                        <div class="certified_data">
                            <div class="title">{{ c.title }}</div>
                            <div class="certifier">{{ c.certifier }}</div>
                        </div>
                        <div class="certified_time">
                            <span class="date">{{ c.date }}</span>
                            <a :href="'/certificates/' + c.file" target="_blank">{{ lang.see }}</a>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="load_more" v-show="can_load_more">
                <button class="button" @click="loadMore">{{ lang.load_more }}</button>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent, Ref, ref, computed } from '@vue/runtime-core'
import { useStore } from "vuex"
import { useLang } from "../utils/langs"
import certificates from "../data/certificates"
import certificates_list from '../langs/certificates_list'

const MAX_CERTIFICATES_SHOWN_BY_DEFAULT = 5
const CERTIFICATES_FOR_EACH_CLICK = 4

export default defineComponent({
    setup() {
        const { getters } = useStore();
        const len : Ref<number> = ref(MAX_CERTIFICATES_SHOWN_BY_DEFAULT) // max certificates by default
        const list_of_certificates = computed(() => {
            return certificates.slice(0, len.value)
        })
        const can_load_more = computed(() => {
            return len.value < certificates.length
        })
        const lang = computed(() => {
            return useLang(certificates_list, getters.lang)
        })

        function loadMore() {
            if (can_load_more.value) {
                len.value = len.value + CERTIFICATES_FOR_EACH_CLICK
            }
        }

        return {
            list_of_certificates,
            can_load_more,
            lang,
            loadMore
        };
    },
})
</script>