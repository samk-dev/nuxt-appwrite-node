import type { User } from '~/types'

export default defineEventHandler(async (event) => {
  const { account } = useAppwriteSessionClient(event)

  try {
    event.context.user = await account.get()
  } catch (error) {
    event.context.user = null
  }
})

declare module 'h3' {
  interface H3EventContext {
    user: User | null
  }
}
