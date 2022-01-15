<template>
  <div class="relative">
    <img
      class="absolute top-10 right-0 opacity-80 dark:opacity-50 xl:top-0"
      :src="image"
    />
    <section class="relative z-10">
      <h1 class="font-bold text-xl mb-4 lg:text-3xl lg:mb-6">{{ msg }}</h1>
      <div class="mb-4 lg:mb-6">
        <h2 class="font-medium text-lg lg:text-2xl">My name is {{ name }}</h2>
        <p class="description text-purple-300">{{ description }}</p>
      </div>
      <div class="flex space-x-2">
        <p>Contact ME</p>
        <a class="link" :href="`mailto:${email}`" target="_blank">
          <hui-icon icon="envelope" />
        </a>
        <a class="link" :href="github" target="_blank">
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
  import { storeToRefs } from 'pinia'
  import { computed } from 'vue'

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
</script>

<style scoped>
  img {
    @apply w-48 pointer-events-none;

    clip-path: circle(50%);
  }
</style>
