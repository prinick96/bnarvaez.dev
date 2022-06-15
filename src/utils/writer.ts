import { Ref, computed } from '@vue/runtime-core'

const EMPTY_REACTIVE_VALUE = ""

export async function useWriter(reactive : Ref<string>, filled : string, blink : boolean = false, speed : number = 30) {
    reactive.value = EMPTY_REACTIVE_VALUE
    
    for (let i = 0; i < filled.length; i++) {
        await new Promise(r => setTimeout(r, speed));

        // Avoid write in $reactive when $filled has changed but the promise do not resolve yet
        if (i > 0 && reactive.value == EMPTY_REACTIVE_VALUE) {
            return
        }

        reactive.value += filled.charAt(i)

        if (blink && i == (filled.length - 1)) {
            reactive.value += '<span class="blink">_</span>'
        }
        
    }
}