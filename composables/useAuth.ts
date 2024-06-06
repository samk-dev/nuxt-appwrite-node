import type { FormLogin } from '~/types'

export const useAuth = () => {
  const user = useUser()
  const { $appwrite } = useNuxtApp()

  const createEmailSession = async (credentials: FormLogin) =>
    await $appwrite('/session', {
      method: 'POST',
      body: {
        email: credentials.email,
        password: credentials.password
      }
    })

  const logout = async () => {
    await $appwrite('/session', {
      method: 'DELETE'
    })
    user.value = null
    await navigateTo({
      name: 'login'
    })
  }

  return { createEmailSession, logout }
}
