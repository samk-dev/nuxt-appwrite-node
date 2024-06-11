# Nuxt `appwrite-node` example

Test driving Appwrite with Nuxt/Nitro

## Install deps

```bash
pnpm install
```

## Create `.env` file

```bash
cp env-example.txt .env
```

## Set `.env` variables

```conf
### PUBLIC RUNTIMECONFIG
NUXT_PUBLIC_APP_DOMAIN=http://localhost:3000
NUXT_PUBLIC_API_PATH=api/v1

### PRIVATE RUNTIMECONFIG
NUXT_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
NUXT_APPWRITE_PROJECT=your-project-id
NUXT_APPWRITE_API_KEY=api-key-with-at-least-session-create-permission
NUXT_APPWRITE_COOKIE_NAME=a_session
NUXT_APPWRITE_BUCKET_SSR=your-bucket-id
```
