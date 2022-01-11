<template>
  <main class="flex flex-col items-center justify-center">
    <div class="container flex flex-col items-center">
      <HelloWorld msg="Hello It's the vue-project-base" />
    </div>
  </main>
</template>

<script setup lang="ts">
  import HelloWorld from './components/HelloWorld.vue'
</script>

<style scoped>
  main {
    @apply w-full h-full;
  }
</style>
