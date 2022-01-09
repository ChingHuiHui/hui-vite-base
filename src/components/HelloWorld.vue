<template>
  <div>
    <img class="mx-auto mb-12" src="@/assets/images/IU.jpg" alt="" />
    <h1 class="text-3xl">{{ msg }}</h1>
    <h2>{{ name }}</h2>
    <p>{{ description }}</p>
    <p>{{ position }}</p>
    <div class="flex flex-col">
      <a :href="email" class="text-blue-500" target="_blank">{{ email }}</a>
      <a :href="github" class="text-blue-500" target="_blank">{{ github }}</a>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useUserStore } from '@/stores/user'
  import { storeToRefs } from 'pinia'

  defineProps<{ msg: string }>()

  const userStore = useUserStore()

  const { name, description, github, email, position, age } =
    storeToRefs(userStore)
</script>

<style scoped>
  img {
    @apply w-48 pointer-events-none;

    clip-path: circle(50%);
  }
</style>
