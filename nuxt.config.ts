// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxt/a11y',
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/icon',
    '@formkit/nuxt',
    '@nuxtjs/i18n',
    '@nuxtjs/tailwindcss',
    'nuxt-nodemailer',
    '@nuxtjs/sitemap'
  ],

  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@62..125,400..900&display=swap'
        }
      ]
    }
  },

  // Used by @nuxtjs/sitemap; keep in sync with i18n.baseUrl
  site: {
    url: 'https://www.bartechlabs.com',
    name: 'Bartech Labs'
  },

  // One sitemap.xml with hreflang alternates instead of a per-locale sitemap index
  sitemap: {
    sitemaps: false
  },

  runtimeConfig: {
    // Recipient of contact form messages (NUXT_CONTACT_TO)
    contactTo: 'hello@bartechlabs.com'
  },

  tailwindcss: {
    cssPath: '~/assets/css/main.css'
  },

  i18n: {
    baseUrl: 'https://www.bartechlabs.com',
    defaultLocale: 'en',
    strategy: 'prefix_except_default',
    locales: [
      { code: 'en', language: 'en-US', name: 'English', file: 'en.json' },
      { code: 'hu', language: 'hu-HU', name: 'Magyar', file: 'hu.json' }
    ],
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root'
    }
  },

  // Every option here can be overridden with NUXT_NODEMAILER_* env vars,
  // but only options that exist in this object.
  nodemailer: {
    from: '"Bartech Labs" <hello@bartechlabs.com>',
    host: 'localhost',
    port: 1025,
    secure: false,
    auth: {
      user: '',
      pass: ''
    }
  }
})
