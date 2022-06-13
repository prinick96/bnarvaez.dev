import { Ref, computed } from '@vue/runtime-core'

export async function useWriter(reactive : Ref<string>, filled : string, blink : boolean = false, speed : number = 30) {
    reactive.value = ""
    
    for (let i = 0; i < filled.length; i++) {
        reactive.value += filled.charAt(i)

        if (blink && i == (filled.length - 1)) {
            reactive.value += '<span class="blink">_</span>'
        }

        await new Promise(r => setTimeout(r, speed));
    }
}