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
NUXT_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
NUXT_APPWRITE_PROJECT=your-project-id
NUXT_APPWRITE_API_KEY=your-token-with-at-least-session-create-permissions
NUXT_APPWRITE_COOKIE_NAME=a_session
```
