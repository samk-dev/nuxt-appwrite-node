import type { FormLogin } from '~/types'

export const useAuth = () => {
  const user = useUser()
  const appwrite = useAppwrite()

  const createEmailSession = async (credentials: FormLogin) =>
    await appwrite('/session', {
      method: 'POST',
      body: {
        email: credentials.email,
        password: credentials.password
      }
    })

  // TODO: password reset

  const logout = async () => {
    await appwrite('/session', {
      method: 'DELETE'
    })

    user.value = null
    return await navigateTo({
      name: 'login'
    })
  }

  return { createEmailSession, logout }
}
