<script lang="ts" setup>
const user = useUser()

const onLogin = async () => await navigateTo({ name: 'login' })
const onViewAccount = async () => await navigateTo({ name: 'account' })
</script>

<template>
  <div class="min-h-dvh flex flex-col flex-1 justify-center items-center p-6">
    <UButton v-if="!user" size="xl" @click="onLogin">Sign in &rarr;</UButton>
    <UButton
      v-else
      size="xl"
      leading-icon="i-heroicons-user-circle"
      @click="onViewAccount"
    >
      View account
    </UButton>
  </div>
</template>
