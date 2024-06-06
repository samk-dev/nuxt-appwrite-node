import type { User } from '~/types'

export const useUser = () => useState<User | null>('current-user', () => null)
