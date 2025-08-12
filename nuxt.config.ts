export default defineNuxtConfig({
  // Enable Nuxt UI
  modules: [
    '@nuxt/ui',
    '@nuxtjs/sitemap',
    '@pinia/nuxt'
  ],

  // App configuration
  app: {
    head: {
      title: 'Balanced Air Specialists - Cleanroom Validation and DOP Filter Testing',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'Our comprehensive cleanroom validation report describes in detail the raw data acquired from our test results and measurements taken on site.',
        },
        {
          property: 'og:description',
          content: 'Our comprehensive cleanroom validation report describes in detail the raw data acquired from our test results and measurements taken on site.',
        },
        {
          property: 'og:url',
          content: 'https://bascc.co.uk',
        },
        {
          property: 'og:site_name',
          content: 'Balanced Air Specialists',
        },
        {
          property: 'og:type',
          content: 'company',
        },
        {
          property: 'og:locale',
          content: 'en_GB',
        },
      ],
      link: [
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/apple-touch-icon.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: '/favicon-32x32.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: '/favicon-16x16.png',
        },
        { rel: 'manifest', href: '/site.webmanifest' },
        { rel: 'mask-icon', color: '#5bbad5', href: '/safari-pinned-tab.svg' },
        { name: 'msapplication-TileColor', content: '#2b5797' },
        { name: 'theme-color', content: '#ffffff' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;700&display=swap',
        },
      ],
    }
  },

  // Sitemap configuration
  sitemap: {
    hostname: 'https://bascc.co.uk',
  },

  // Nitro configuration (replaces generate)
  nitro: {
    compatibilityDate: '2025-08-12',
    prerender: {
      // Your generate options here
    }
  },

  // CSS
  css: ['~/assets/scss/main.scss'],

  // Build configuration
  build: {
    transpile: ['vee-validate']
  },

  // Experimental features
  experimental: {
    defaults: {
      useAsyncData: {
        value: 'null',
        errorValue: 'null'
      }
    }
  },

  // TypeScript
  typescript: {
    strict: true,
    typeCheck: true
  },

  // ESLint
  eslint: {
    config: {
      extends: ['@nuxt/eslint-config']
    }
  }
})
