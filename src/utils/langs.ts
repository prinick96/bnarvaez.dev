import { Langs } from '../types/langs'

export function useLang(l : Langs, actual_lang : 'es'|'en') {
    return l[ actual_lang ]
}