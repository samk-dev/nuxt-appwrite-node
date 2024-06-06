export default defineNuxtRouteMiddleware(async (to, _from) => {
  if (to.name === 'account') {
    const user = useUser()

    if (!user.value) {
      return await navigateTo({
        name: 'login'
      })
    }
  }
})
