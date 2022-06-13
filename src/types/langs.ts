interface Lang {
    [key: string] : string
}

export type Langs = {
    [key in 'es' | 'en']: Lang
}