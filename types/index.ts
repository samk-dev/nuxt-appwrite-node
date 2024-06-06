import { z } from 'zod'
import type { Models } from 'node-appwrite'

export const emailSchema = z.string().email('Invalid email')
export const passwordSchema = z
  .string()
  .min(8, 'Password must be 8 characters long')

export const formLoginSchema = z.object({
  email: emailSchema,
  password: passwordSchema
})

export type FormLogin = z.output<typeof formLoginSchema>

export type User = Models.User<Models.Preferences>
