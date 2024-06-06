<script lang="ts" setup>
const user = useUser()
const { logout } = useAuth()
const toast = useToast()

const loading = ref(false)

const onLogout = async () => {
  try {
    loading.value = true
    await logout()
    loading.value = false
    toast.add({ title: 'Logout success' })
  } catch (error: any) {
    loading.value = false
    toast.add({ description: error.statusMessage, color: 'red' })
  }
}
</script>

<template>
  <div>
    account
    <h1>hi {{ user?.name }}</h1>
    <UButton :loading :disabled="loading" @click="onLogout">Logout</UButton>
  </div>
</template>
