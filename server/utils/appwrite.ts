import { type H3Event } from 'h3'
import {
  Client,
  Account,
  Databases,
  Storage,
  ID,
  AppwriteException,
  OAuthProvider
} from 'node-appwrite'
import { InputFile } from 'node-appwrite/file'

export const useAppwriteAdminClient = (e: H3Event) => {
  const config = useRuntimeConfig(e)
  const userAgent = getRequestHeader(e, 'User-Agent') as string

  const client = new Client()
    .setEndpoint(config.appwrite.endpoint)
    .setProject(config.appwrite.project)
    .setForwardedUserAgent(userAgent)
    .setKey(config.appwrite.apiKey)

  return {
    get account() {
      return new Account(client)
    },
    get oAuthProvider() {
      return OAuthProvider
    }
  }
}

export const useAppwriteSessionClient = (e: H3Event) => {
  const config = useRuntimeConfig(e)
  const userAgent = getRequestHeader(e, 'User-Agent') as string

  const client = new Client()
    .setEndpoint(config.appwrite.endpoint)
    .setProject(config.appwrite.project)
    .setForwardedUserAgent(userAgent)

  const cookie = getCookie(e, config.appwrite.cookieName)
  if (cookie) client.setSession(cookie)

  return {
    get account() {
      return new Account(client)
    },
    get database() {
      return new Databases(client)
    },
    get storage() {
      return new Storage(client)
    },
    get ID() {
      return ID
    },
    get InputFile() {
      return InputFile
    }
  }
}

export const handleAppwriteException = (error: any | unknown) => {
  if (error instanceof AppwriteException) {
    return createError({
      statusCode: error.code,
      statusMessage: error.message,
      message: error.name
    })
  }

  return createError(error)
}
