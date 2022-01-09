<script setup lang="ts">
  import { computed, ref, watchEffect } from 'vue'
  import { useUserStore } from '@/stores/user'
  import { storeToRefs, mapState } from 'pinia'

  defineProps<{ msg: string }>()

  const userStore = useUserStore()

  const { name, github, email, position, age } = storeToRefs(userStore)

  const increase = () => {
    // mutate the value from store directly
    // age.value++
    // call the $path method
    // userStore.$patch({ age: userStore.age + 1, nickname: 'hui' })

    // the $patch method also accepts a function to group this kind of mutations
    userStore.$patch((state) => {
      state.age += 2
      state.nickname = 'hui!'
    })
  }
</script>

<template>
  <div>
    <h1 class="text-3xl">{{ msg }}</h1>
    <h2>{{ name }}</h2>
    <p>{{ position }}</p>
    <div class="flex flex-col">
      <a :href="email" class="text-blue-500" target="_blank">{{ email }}</a>
      <a :href="github" class="text-blue-500" target="_blank">{{ github }}</a>
    </div>
  </div>
</template>
