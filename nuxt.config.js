export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'static',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title:
      'Balanced Air Specialists - Cleanroom Validation and DOP Filter Testing',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Our comprehensive cleanroom validation report describes in detail the raw data acquired from our test results and measurements taken on site.',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          'Our comprehensive cleanroom validation report describes in detail the raw data acquired from our test results and measurements taken on site.',
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://bascc.co.uk',
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'Balanced Air Specialists',
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'company',
      },
      {
        hid: 'og:locale',
        property: 'og:locale',
        content: 'en_GB',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;700&display=swap',
      },
    ],
  },
  /*
   ** Global CSS
   */
  css: ['@/assets/scss/main.scss'],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  styleResources: {
    scss: ['./assets/scss/*.scss'],
  },
  plugins: [
    { src: 'plugins/owl.js', ssr: false },
    { src: 'plugins/vuelidate', ssr: false },
  ],
  recaptcha: {
    hideBadge: false, // Hide badge element (v3 & v2 via size=invisible)
    siteKey: '6LfLQvUZAAAAANx_upNhXyY_wnKGNpL1EU-tu6z0', // Site key for requests
    version: 2, // Version
    size: 'normal', // Size: 'compact', 'normal', 'invisible' (v2)
  },
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    'nuxt-fontawesome',
    '@nuxtjs/recaptcha',
    '@nuxtjs/sitemap',
  ],
  sitemap: {
    hostname: 'https://bascc.co.uk',
  },
  fontawesome: {
    imports: [
      {
        set: '@fortawesome/free-solid-svg-icons',
        icons: ['fas'],
      },
    ],
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  bootstrapVue: {
    icons: true, // Install the IconsPlugin (in addition to BootStrapVue plugin
  },
  axios: {},
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    // analyze: true,
  },
  serverMiddleware: [
    // Server-side redirects
    '~/middleware/redirects',
  ],
}
