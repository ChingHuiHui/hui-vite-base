<template>
  <main class="flex flex-col items-center justify-center dark:bg-gray-800">
    <div class="container flex flex-col items-center">
      <HelloWorld msg="Hello It's the vue-project-base" />
    </div>
  </main>
</template>

<script setup lang="ts">
  import { onBeforeMount, watchEffect } from 'vue-demi'
  import HelloWorld from './components/HelloWorld.vue'
  import { useModeStore } from '@/stores/mode'
  import { storeToRefs } from 'pinia'

  const modeStore = useModeStore()

  const { isDarkMode } = storeToRefs(modeStore)

  onBeforeMount(() => {
    modeStore.init()
  })

  watchEffect(() => {
    if (isDarkMode.value) {
      document.documentElement.classList.add('dark')
      return
    }

    document.documentElement.classList.remove('dark')
  })
</script>

<style scoped>
  main {
    @apply w-full h-full;
  }
</style>
