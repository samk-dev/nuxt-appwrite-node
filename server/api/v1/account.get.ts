export default defineEventHandler(async (event) => {
  const user = event.context.user

  if (!user) {
    return createError({
      statusCode: 401,
      statusMessage: 'Unauthorized'
    })
  }

  return user
})
