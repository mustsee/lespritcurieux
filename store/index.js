export const state = () => ({
    locales: ['fr', 'pl', 'en'],
    locale: 'fr'
})

export const mutations = {
    SET_LANG(state, locale) {
        if (state.locales.indexOf(locale) !== -1) {
            state.locale = locale
        }
    }
}
