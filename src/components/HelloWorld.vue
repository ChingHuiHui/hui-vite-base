<template>
  <div class="relative">
    <img class="image" :src="image" draggable="false" />
    <section class="relative z-10">
      <h1 class="font-bold text-xl mb-4 lg:text-3xl lg:mb-6">{{ msg }}</h1>
      <div class="mb-4 lg:mb-6">
        <h2 class="font-medium text-lg lg:text-2xl">My name is {{ name }}</h2>
        <p class="description text-purple-300">{{ description }}</p>
      </div>
      <div class="space-x-4">
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

  const contact = [
    { link: `mailto:${email.value}`, icon: { pack: 'fab', name: 'github' } },
    { link: github.value, icon: { pack: 'fas', name: 'envelope' } },
  ]
</script>

<style scoped>
  .image {
    @apply absolute top-10 right-0 xl:top-0;
    @apply w-48 opacity-70 transition-all duration-500;

    clip-path: circle(50%);

    &:hover {
      @apply transform scale-110 opacity-90;
    }
  }
</style>
