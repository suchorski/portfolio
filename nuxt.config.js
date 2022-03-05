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
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Thiago Suchorski`s Portfolio Website' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
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
    '@nuxtjs/robots',
    '@nuxtjs/sitemap',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  // PWA configuration: https://pwa.nuxtjs.org/
  pwa: {
    meta: {
      mobileAppIOS: true,
      name: 'Suchorski',
      theme_color: colors.gray[900],
      lang: 'pt-BR',
      ogHost: 'www.suchorski.com',
      nativeUI: true,
    },
    manifest: {
      name: 'Suchorski',
      short_name: 'Suchorski',
      background_color: colors.gray[100],
      lang: 'pt-BR',
    },
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
    strategy: 'prefix_and_default',
    langDir: '~/i18n',
    locales: [
      { code: 'en-us', iso: 'en-US', file: 'en-US.js', dir: 'ltr', name: 'English' },
      { code: 'pt-br', iso: 'pt-BR', file: 'pt-BR.js', dir: 'ltr', name: 'Português', isCatchallLocale: true },
    ],
    defaultLocale: 'pt-br',
    baseUrl: 'https://www.suchorski.com',
    vueI18nLoader: true,
    vueI18n: {
      fallbackLocale: 'pt-br',
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

  // Robots Configuration: https://www.npmjs.com/package/@nuxtjs/robotsnpm
  robots: [
    {
      UserAgent: '*',
      Allow: '/'
    },
    {
      Sitemap: 'https://www.suchorski.com/sitemap.xml',
    },
  ],

  // Sitemap Configuration: https://sitemap.nuxtjs.org/usage/sitemap
  sitemap: {
    hostname: 'https://www.suchorski.com',
  },

}
