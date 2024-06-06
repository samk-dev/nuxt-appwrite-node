import type { User } from '~/types'

export default defineNuxtRouteMiddleware(async () => {
  const user = useUser()

  if (!user.value) {
    const { $appwrite } = useNuxtApp()
    try {
      user.value = await $appwrite<User | null>('/account')
    } catch (error) {
      // Do nothing
    }
  }
})
