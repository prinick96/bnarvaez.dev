<template>
    <section class="container">
        <div class="professional_skills">
            
            <div class="switch">
                <div class="js-front-tab" @click="tab = 'front_end'" :class="{ 'selected' : tab == 'front_end'}">{{ lang.front }}</div> 
                <div @click="tab = 'back_end'" :class="{ 'selected' : tab == 'back_end'}">{{ lang.back }}</div>
                <div @click="tab = 'db'" :class="{ 'selected' : tab == 'db'}">{{ lang.db }}</div>
                <div class="js-tools-tab" @click="tab = 'tools'" :class="{ 'selected' : tab == 'tools'}">{{ lang.tools }}</div>
                <div @click="tab = 'design'" :class="{ 'selected' : tab == 'design'}" v-html="lang.design"></div>
                <div @click="tab = 'test'" :class="{ 'selected' : tab == 'test'}">{{ lang.test }}</div>
            </div>
            
            <Transition mode="out-in">
                <FrontEnd v-show="tab == 'front_end'" />
            </Transition>

            <Transition mode="out-in">
                <BackEnd v-show="tab == 'back_end'" />  
            </Transition>

            <Transition mode="out-in">    
                <DataBases v-show="tab == 'db'" />
            </Transition>

            <Transition mode="out-in">  
                <DesignAndArch v-show="tab == 'design'" />
            </Transition>

            <Transition mode="out-in">  
                <TestTools v-show="tab == 'test'" />
            </Transition>

            <Transition mode="out-in">  
                <DevTools v-show="tab == 'tools'" />
            </Transition>

        </div>
    </section>
   
</template>

<script lang="ts">
import { defineComponent, Ref, ref, computed } from '@vue/runtime-core'
import { useStore } from "vuex"
import { useLang } from "../utils/langs"
import BackEnd from "./techs/BackEnd.vue"
import FrontEnd from "./techs/FrontEnd.vue"
import DataBases from "./techs/DataBases.vue"
import DesignAndArch from "./techs/DesignAndArch.vue"
import TestTools from "./techs/TestTools.vue"
import DevTools from "./techs/DevTools.vue"
import professional_skills from '../langs/professional_skills'

export default defineComponent({
    components: {
        FrontEnd,
        BackEnd,
        DataBases,
        DesignAndArch,
        TestTools,
        DevTools
    },
    setup() {
        const tab : Ref<string> = ref("front_end")
        const { getters } = useStore();
        const lang = computed(() => {
            return useLang(professional_skills, getters.lang)
        })

        return {
            tab,
            lang
        };
    },
})
</script>