<template>
    <section class="container">
        <div class="about">
            <div class="about__presentation">
                <h4 v-html="say_hello"></h4>
                <h1>Brayan Narváez</h1>
                <h1 class="js-web-developer">{{ lang.develop }}</h1>
            </div>
            
            <div class="about__profile">
                <div class="about__stats">

                    <ul>
                        <li>
                            <div class="stat">
                                <div class="quantity">
                                    {{ years_of_experience }}
                                </div>
                                <div class="subtitle">
                                    {{ lang.years_exp }}
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="stat">
                                <div class="quantity">
                                    {{ clients_satisfied }}%
                                </div>
                                <div class="subtitle">
                                    {{ lang.clients_success }}
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="stat">
                                <div class="quantity">
                                    {{ projects_finished }}+
                                </div>
                                <div class="subtitle">
                                    {{ lang.projects_finished }}
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="about__photo">
                    <figure>
                        <video id="me_video" width="360" height="632" muted="" poster="/video/me-cover.webp" type="video/mp4" src="/video/me_loop.mp4" tabindex="-1" playsinline="" loop></video>
                    </figure>
                    <small v-html="love_code"></small>
                </div>
                <div class="about__education">
                    <div class="box">
                        <span class="title">{{ lang.about_me }}</span>
                        <p v-html="lang.am_develop"></p>
                        <p><span v-html="lang.live_in"></span> <strong>{{ years_old }} {{ lang.years }}</strong> <span v-html="lang.started"></span></p>
                    </div>
                    <div class="box education">
                        <span class="title">{{ lang.studies }}</span>
                        <figure>
                            <img src="/images/ucab.png" alt="Universidad Católica Andrés Bello (UCAB)" title="Universidad Católica Andrés Bello (UCAB)" />
                        </figure>
                        <span class="subtitle">{{ lang.engineering }}</span>
                    </div>
                </div>
            </div>

            <div class="lets-talk">
                <a href="tel:+34683296063">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 3.5L5 17.5" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M19 13.77V3.5H8.73" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span>{{ lang.chat }}</span>  
                </a>
                <div class="border"></div>
            </div>
            
        </div>
    </section>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref, Ref, watch } from '@vue/runtime-core'
import { useStore } from "vuex"
import { useLang } from "../utils/langs"
import { useWriter } from "../utils/writer"
import { useIncreaser } from "../utils/increaser"
import about_me from '../langs/about_me'

export default defineComponent({
    setup() {
        const { getters } = useStore();
        const from = 2015
        const now = new Date()
        const years : Ref<number> = ref(0)
        const clients_satisfied: Ref<number> = ref(0)
        const projects_finished: Ref<number> = ref(0)
        const say_hello : Ref<string> = ref("")
        const love_code : Ref<string> = ref("")
        
        const lang = computed(() => {
            return useLang(about_me, getters.lang)
        })
        const years_old = computed(() => { 
            const birthday = new Date("1996/10/28 21:00:00")
            let edad = now.getFullYear() - birthday.getFullYear()
            const monthDifference = now.getMonth() - birthday.getMonth()

            if (monthDifference < 0 || monthDifference === 0 && now.getDate() < birthday.getDate()) {
                edad--
            }

            return edad
        })
        const years_of_experience = computed(() => {
            if (years.value > 10) {
                return years.value
            }
            
            return '0' + years.value
        })

        function textAnimations() {
            useWriter(say_hello, lang.value.hi, true)
            useWriter(love_code, lang.value.love_coding, true)
        }

        function safariLoadVideo() {
            const video = document.getElementById('me_video') as HTMLVideoElement || null

            if (video != null) {
                video.play()
            }
        }

        onMounted(() => {
            useIncreaser(years, now.getFullYear() - from)
            useIncreaser(clients_satisfied, 100, 5)
            useIncreaser(projects_finished, 30, 20)
            textAnimations()
            safariLoadVideo()
        })

        watch(lang, () => {
            textAnimations()
        })

        return {
            years_of_experience,
            clients_satisfied,
            projects_finished,
            years_old,
            lang,
            say_hello,
            love_code
        };
    },
})
</script>