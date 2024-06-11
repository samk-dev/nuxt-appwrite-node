<script lang="ts" setup>
import { type FormLogin, formLoginSchema } from '~/types'
import type { FormSubmitEvent } from '#ui/types'

const form = reactive({
  email: undefined,
  password: undefined
})

const disabled = computed(() => !formLoginSchema.safeParse(form).success)
const loading = ref(false)

const { createEmailSession } = useAuth()
const toast = useToast()

const onLogin = async (event: FormSubmitEvent<FormLogin>) => {
  try {
    loading.value = true

    await createEmailSession({
      email: event.data.email,
      password: event.data.password
    })

    loading.value = false
    toast.add({ title: 'Session created' })

    await navigateTo({
      name: 'account'
    })
  } catch (error: any) {
    loading.value = false
    toast.add({ description: error.statusMessage, color: 'red' })
  }
}

const config = useRuntimeConfig()
</script>

<template>
  <div class="min-h-dvh flex flex-col flex-1 items-center justify-center p-8">
    <UCard class="w-full lg:max-w-[40%] lg:mx-auto">
      <template #header>
        <h1 class="text-xl font-semibold">Sign in to your account</h1>
      </template>

      <UForm
        :schema="formLoginSchema"
        :state="form"
        class="space-y-4"
        @submit="onLogin"
      >
        <UFormGroup label="Email" name="email">
          <UInput
            v-model="form.email"
            placeholder="Enter your email"
            leading-icon="i-heroicons-at-symbol"
          />
        </UFormGroup>

        <UFormGroup label="Password" name="password">
          <UInput
            v-model="form.password"
            type="password"
            placeholder="Enter your password"
            leading-icon="i-heroicons-key"
          />
        </UFormGroup>

        <UButton type="submit" block :disabled="disabled || loading" :loading>
          Sign in &rarr;
        </UButton>
      </UForm>

      <UDivider label="Or" class="my-4" />
      <div class="text-center">
        <form :action="`${config.public.appDomain}/api/v1/oauth`" method="post">
          <input type="hidden" name="provider" value="spotify" />
          <UButton type="submit" variant="soft">Sign up with Spotify</UButton>
        </form>
      </div>
    </UCard>
  </div>
</template>
