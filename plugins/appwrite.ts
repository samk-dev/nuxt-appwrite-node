export default defineNuxtPlugin({
  name: 'appwrite',
  parallel: true,
  setup(_nuxtApp) {
    const config = useRuntimeConfig()
    const headers = useRequestHeaders(['cookie'])

    const appwrite = $fetch.create({ baseURL: config.public.apiPath, headers })

    return {
      provide: {
        appwrite
      }
    }
  }
})
