<template>
  <div class="relative">
    <img
      class="absolute right-0 opacity-50"
      src="@/assets/images/IU.jpg"
      alt=""
    />
    <section class="relative z-10">
      <h1 class="font-bold text-xl mb-4 lg:text-3xl lg:mb-6">{{ msg }}</h1>
      <div class="mb-4 lg:mb-6">
        <h2 class="font-medium text-lg lg:text-2xl">My name is {{ name }}</h2>
        <p class="text-purple-500">{{ description }}</p>
      </div>
      <div class="flex space-x-2">
        <p>Contact ME</p>
        <a :href="`mailto:${email}`" target="_blank">
          <hui-icon icon="envelope" />
        </a>
        <a :href="github" target="_blank">
          <hui-icon pack="fab" icon="github" />
        </a>
      </div>
    </section>
    <div>
      <div v-if="loading">loading...</div>
      <p>{{ greeting }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useUserStore } from '@/stores/user'
  import { storeToRefs } from 'pinia'
  import { useQuery, useResult } from '@vue/apollo-composable'
  import gql from 'graphql-tag'

  import HuiIcon from './HuiIcon.vue'

  defineProps<{ msg: string }>()

  const userStore = useUserStore()

  const { name, description, github, email, position, age } =
    storeToRefs(userStore)

  const { result, loading } = useQuery(
    gql`
      query {
        greeting
      }
    `
  )

  const greeting = useResult(result, '')
</script>

<style scoped>
  img {
    @apply w-48 pointer-events-none;

    clip-path: circle(50%);
  }

  a {
    @apply text-gray-800;
  }
</style>
