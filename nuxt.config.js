const colors = require('tailwindcss/colors')

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  ssr: false,
  target: 'static',
  generate: {
    fallback: true,
  },
  head: {
    title: 'Thiago Suchorski',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Thiago Suchorski' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/transitions.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/moment.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/moment',
    '@nuxtjs/fontawesome',
    '@nuxtjs/pwa',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/i18n',
    '@nuxt/content',
    '@nuxtjs/google-adsense',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  // Loading Configuration
  loading: {
    color: colors.gray[900],
    height: '2px',
  },
  loadingIndicator: {
    name: 'cube-grid',
    color: colors.gray[700],
    background: colors.gray[100],
  },

  // i18n Configuration
  i18n: {
    langDir: '~/i18n',
    locales: [
      { code: 'en-us', iso: 'en-US', file: 'en-US.js', dir: 'ltr', name: 'English' },
      { code: 'pt-br', iso: 'pt-BR', file: 'pt-BR.js', dir: 'ltr', name: 'Português' },
    ],
    vueI18nLoader: true,
    vueI18n: {
      fallbackLocale: 'en-us',
    },
  },

  // MomentJS Configuration
  moment: {
    defaultLocale: 'en-us',
    locales: ['pt-br'],
    timezone: true,
  },

  // Fontawesome Configuration
  fontawesome: {
    component: 'fa',
    icons: {
      brands: ['faGithub', 'faLinkedin', 'faFacebook', 'faInstagram', 'faSteam'],
    },
  },

  // AdSense Configuration
  'google-adsense': {
    id: 'ca-pub-5813806614231709',
  },

}
