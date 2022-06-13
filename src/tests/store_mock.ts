import { createStore } from 'vuex'

const mockStore = createStore({
    state: {
        lang: 'es',
    },
    getters: {
        lang(state) {
            if (['es','en'].indexOf(state.lang) != -1) {
                return state.lang
            }

            return 'es'
        },
    },
    mutations: {
        change_language(state, lang : 'es'|'en') {
            state.lang = lang
        },
    },
    actions: {},
})

export default mockStore