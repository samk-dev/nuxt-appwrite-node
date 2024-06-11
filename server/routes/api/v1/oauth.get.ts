export default defineEventHandler(async (event) => {
  const { userId, secret } = getQuery<{ userId: string; secret: string }>(event)

  if (!userId || !secret) {
    return sendRedirect(event, '/')
  }

  const config = useRuntimeConfig(event)
  const { account } = useAppwriteAdminClient(event)

  try {
    const session = await account.createSession(userId, secret)

    setCookie(event, config.appwrite.cookieName, session.secret, {
      expires: new Date(session.expire),
      path: '/',
      httpOnly: true,
      secure: true,
      sameSite: 'strict'
    })

    await sendRedirect(event, '/account')
  } catch (error) {
    return handleAppwriteException(error)
  }
})
