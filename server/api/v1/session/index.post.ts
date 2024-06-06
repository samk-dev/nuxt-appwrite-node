import type { FormLogin } from '~/types'

export default defineEventHandler(async (event) => {
  const { email, password } = await readBody<FormLogin>(event)

  // TODO: validate body with h3/zod
  if (!email || !password) {
    return createError({
      statusCode: 400,
      statusMessage: 'Missing email or password'
    })
  }

  const { account } = useAppwriteAdminClient(event)
  const config = useRuntimeConfig(event)
  const requestHost = getRequestHost(event)

  const host =
    process.env.NODE_ENV === 'development'
      ? removePortFromUrl(requestHost)
      : requestHost

  try {
    const session = await account.createEmailPasswordSession(email, password)
    setCookie(event, config.appwrite.cookieName, session.secret, {
      expires: new Date(session.expire),
      path: '/',
      httpOnly: true,
      secure: true,
      sameSite: 'strict'
    })

    return 'session created'
  } catch (error) {
    return handleAppwriteException(error)
  }
})
