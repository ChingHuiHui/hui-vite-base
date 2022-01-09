<script setup lang="ts">
  // This starter template is using Vue 3 <script setup> SFCs
  // Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
  import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <main class="flex flex-col items-center justify-center">
    <div class="container flex flex-col items-center">
      <HelloWorld msg="Hello It's the vite-base by hui" />
    </div>
  </main>
</template>

<style scoped>
  main {
    @apply w-full h-full;
  }
</style>
