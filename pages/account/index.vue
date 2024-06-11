<script lang="ts" setup>
const user = useUser()
const { logout } = useAuth()
const toast = useToast()
const { $appwrite } = useNuxtApp()

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

// upload a file
const fileInput = ref<File | null>(null)
const handleFileChange = (event: Event) => {
  const target = event.target as HTMLInputElement
  if (target.files && target.files[0]) {
    fileInput.value = target.files[0]
  }
}

const uploadFile = async () => {
  if (!fileInput.value) {
    alert('Please select a file to upload')
    return
  }

  const formData = new FormData()
  formData.append('file', fileInput.value)
  console.log('FILE', ...formData.entries())
  try {
    const response = await $appwrite('/api/v1/upload', {
      method: 'POST',
      body: formData
    })

    alert('File uploaded successfully')
    console.log(response)
  } catch (error) {
    alert('Error uploading file')
    console.error(error)
  }
}
</script>

<template>
  <div>
    account
    <h1>hi {{ user?.name }}</h1>

    <form @submit.prevent="uploadFile">
      <input ref="fileInput" type="file" @change="handleFileChange" />
      <button type="submit">Upload</button>
    </form>

    <UButton :loading :disabled="loading" @click="onLogout">Logout</UButton>
  </div>
</template>
