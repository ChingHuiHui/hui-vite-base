<template>
  <div class="min-h-screen flex flex-col">
    <main class="flex-1 flex-center mb-auto">
      <div class="container flex-center">
        <HelloWorld msg="Hello It's the vue-project-base" />
      </div>
      <button class="absolute top-5 right-5" @click="toggle">
        <hui-icon
          class="text-xl"
          :pack="isDarkMode ? 'fas' : 'far'"
          icon="moon"
        />
      </button>
    </main>
  </div>
</template>

<script setup lang="ts">
  import { watchEffect } from 'vue'

  import useDarkMode from '@/compositions/useDarkMode'

  import HelloWorld from '@/components/HelloWorld.vue'
  import HuiIcon from '@/components/HuiIcon.vue'

  const { isDarkMode, toggle } = useDarkMode()

  watchEffect(() => {
    if (isDarkMode.value) {
      document.documentElement.classList.add('dark')
      return
    }

    document.documentElement.classList.remove('dark')
  })
</script>
