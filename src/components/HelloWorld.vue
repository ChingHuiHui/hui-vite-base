<template>
  <div class="relative min-w-[18.25rem] md:min-w-[30rem]">
    <img class="image" :src="image" draggable="false" />
    <section class="relative pointer-events-none z-10">
      <h1 class="h1 mb-4 lg:mb-6">{{ msg }}</h1>
      <div class="py-2 text-sm">
        <div v-if="loading">{{ $t('loading') }}</div>
        <p v-if="greeting">{{ greeting }}</p>
      </div>
      <div class="mb-4 lg:mb-6">
        <h2 class="h2">{{ $t('My name is') }} {{ $t(`${name}`) }}</h2>
        <p class="text-purple-300">{{ $t(`${description}`) }}</p>
      </div>
      <div class="space-x-4 pointer-events-auto">
        <a
          v-for="{ link, icon: { pack, name } } in contact"
          :key="name"
          class="link text-2xl"
          :href="link"
          target="_blank"
        >
          <hui-icon :pack="pack" :icon="name" />
        </a>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
  import { storeToRefs } from 'pinia'
  import { computed } from 'vue'

  import { useQuery, useResult } from '@vue/apollo-composable'
  import gql from 'graphql-tag'

  import useDarkMode from '@/compositions/useDarkMode'
  import { useUserStore } from '@/stores/user'

  import IUDark from '@/assets/images/IU.jpg'
  import IULight from '@/assets/images/IU-light.jpg'

  import HuiIcon from './HuiIcon.vue'

  defineProps<{ msg: string }>()

  const { isDarkMode } = useDarkMode()

  const userStore = useUserStore()

  const { name, description, github, email, position, age } =
    storeToRefs(userStore)

  const image = computed(() => {
    return isDarkMode.value ? IUDark : IULight
  })

  const contact = [
    { link: `mailto:${email.value}`, icon: { pack: 'fas', name: 'envelope' } },
    { link: github.value, icon: { pack: 'fab', name: 'github' } },
  ]

  const { result, loading } = useQuery(gql`
    query {
      greeting
    }
  `)

  const greeting = useResult(result, '')
</script>

<style scoped>
  .image {
    @apply absolute top-10 right-0 md:top-0;
    @apply w-48 opacity-70 transition-all duration-500;

    clip-path: circle(50%);

    &:hover {
      @apply transform scale-110 opacity-90;
    }
  }
</style>
