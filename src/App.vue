<template>
  <main
    class="flex flex-col items-center justify-center dark:bg-gray-800 transition-colors duration-300"
  >
    <div class="container flex flex-col items-center">
      <HelloWorld msg="Hello It's the vue-project-base" />

      <button @click="toggle">TOGGLE</button>
    </div>
  </main>
</template>

<script setup lang="ts">
  import { watchEffect } from 'vue'
  import HelloWorld from '@/components/HelloWorld.vue'
  import useDarkMode from '@/compositions/useDarkMode'
  import { MODE } from '@/libs/enum'

  const { isDarkMode, toggle } = useDarkMode()

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
