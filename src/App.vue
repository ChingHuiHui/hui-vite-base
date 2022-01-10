<template>
  <main class="flex flex-col items-center justify-center">
    <div class="container flex flex-col items-center">
      <HelloWorld msg="Hello It's the vue-project-base" />
    </div>
    <div class="container">
      <div class="max-w-2xl">
        <div v-if="loading">isLoading ..</div>
        <div v-if="error">ERROR: {{ error }}</div>
        <div v-if="haveNews" class="flex justify-center">
          RESULT:
          <div v-for="{ id, title } in news" :key="id" class="px-2">
            <span>{{ title }}</span>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
  import { useQuery, useResult } from '@vue/apollo-composable'
  import gql from 'graphql-tag'
  import { computed } from 'vue-demi'
  import HelloWorld from './components/HelloWorld.vue'

  const { result, loading, error } = useQuery(gql`
    query {
      news {
        id
        title
      }
    }
  `)

  const news = useResult(result, [])
  const haveNews = computed(() => news.value.length > 0)
</script>

<style scoped>
  main {
    @apply w-full h-full;
  }
</style>
