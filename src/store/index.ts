import { createStore } from 'vuex'

const LANG_LOCAL_STORAGE_NAME = '____page_language____'

export default createStore({
	state: {
		lang: localStorage.getItem(LANG_LOCAL_STORAGE_NAME) || import.meta.env.VITE_APP_DEFAULT_LANGUAGE,
	},
	getters: {
		lang(state) {
			if (['es','en'].indexOf(state.lang) != -1) {
				return state.lang
			}

			return import.meta.env.VITE_APP_DEFAULT_LANGUAGE
		},
	},
	mutations: {
		change_language(state, lang : 'es'|'en') {
			state.lang = lang
			localStorage.setItem(LANG_LOCAL_STORAGE_NAME, lang);
		},
	},
	actions: {},
})
