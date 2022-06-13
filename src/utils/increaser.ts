import { Ref } from '@vue/runtime-core'

export async function useIncreaser(reactive : Ref<number>, to : number, speed : number = 80) {
    reactive.value = 0
    for (let i = 0; i < to; i++) {
        reactive.value++
        await new Promise(r => setTimeout(r, speed));
    }
}