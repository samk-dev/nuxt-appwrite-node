export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event)
  const { account } = useAppwriteSessionClient(event)

  try {
    await account.deleteSession('current')
    event.context.user = null
    deleteCookie(event, config.appwrite.cookieName)

    setResponseStatus(event, 202)
  } catch (error) {
    return handleAppwriteException(error)
  }
})
