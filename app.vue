<script lang="ts" setup></script>

<template>
  <div class="h-full">
    <NuxtLoadingIndicator :height="3" />
    <NuxtLayout>
      <NuxtPage />
      <UNotifications />
    </NuxtLayout>
  </div>
</template>
