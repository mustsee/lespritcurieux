import pkg from './package'

export default {
    //mode: 'universal',
    mode: 'spa',
    /*
    ** Headers of the page
    */
    head: {
        title: "L'esprit curieux",
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: pkg.description },
            { name: "image",
                property: "og:image",
                content: "/lespritcurieux/preview.jpg"
            }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/lespritcurieux/favicon.ico' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Merriweather:300' }
        ]
    },

    /*
    ** Customize the progress-bar color
    */
    loading: { color: '#fff' },

    /*
    ** Global CSS
    */
    css: [],

    /*
    ** Plugins to load before mounting the App
    */
    plugins: [
        { src: '~plugins/ga.js', ssr: false },
        '~/plugins/i18n.js'
    ],

    /*
    ** Nuxt.js modules
    */
    modules: [],

    generate: {
        routes: [
            '/',
            '/pl',
            '/en',
            '/gronkowski',
            '/pl/gronkowski',
            '/en/gronkowski',
            '/contact',
            '/pl/contact',
            '/en/contact',
            '/partenaires',
            '/pl/partenaires',
            '/en/partenaires',
        ]
    },

    router: {
        middleware: 'i18n',
        base: '/lespritcurieux/'
    },

    /*
    ** Build configuration
    */
    build: {
        /*
        ** You can extend webpack config here
        */
        extend(config, ctx) {
        }
    }
}
