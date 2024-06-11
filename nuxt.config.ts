// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxt/eslint'],
  app: {
    head: {
      htmlAttrs: {
        class: 'h-full'
      },
      bodyAttrs: {
        class: 'h-full'
      }
    }
  },
  runtimeConfig: {
    public: {
      appDomain: '',
      apiPath: ''
    },
    appwrite: {
      endpoint: '',
      project: '',
      apiKey: '',
      cookieName: '',
      bucketSsr: ''
    }
  },
  build: {
    transpile: ['node-appwrite', 'zod']
  },
  nitro: {
    preset: 'cloudflare-pages'
  }
})
