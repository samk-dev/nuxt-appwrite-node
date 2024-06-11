export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event)
  const { account, oAuthProvider } = useAppwriteAdminClient(event)

  const successUrl = `${config.public.appDomain}${config.public.apiPath}/oauth`
  try {
    const redirectUrl = await account.createOAuth2Token(
      oAuthProvider.Spotify,
      successUrl,
      config.public.appDomain,
      [
        'ugc-image-upload',
        'user-read-playback-state',
        'user-read-currently-playing',
        'playlist-read-private',
        'playlist-read-collaborative',
        'playlist-modify-private',
        'playlist-modify-public',
        'user-follow-modify',
        'user-follow-read',
        'user-read-playback-position',
        'user-top-read',
        'user-read-recently-played',
        'user-library-read',
        'user-read-email',
        'user-read-private'
      ]
    )
    await sendRedirect(event, redirectUrl)
  } catch (error) {
    return handleAppwriteException(error)
  }
})
