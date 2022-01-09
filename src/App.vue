<script setup lang="ts">
  import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <main class="flex flex-col items-center justify-center">
    <div class="container flex flex-col items-center">
      <HelloWorld msg="Hello It's the vue-project-base" />
    </div>
  </main>
</template>

<style scoped>
  main {
    @apply w-full h-full;
  }
</style>
