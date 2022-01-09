import { acceptHMRUpdate, defineStore } from 'pinia'

export type UserState = {
  name: string
  github: string
  email: string
  position: string
  age: number
}

export const useUserStore = defineStore('user', {
  state: (): UserState => {
    return {
      name: 'Ching Hui',
      github: 'https://github.com/ChingHuiHui',
      email: 'sunny70624@gmail.com',
      position: 'Frontend developer',
      age: 22,
    }
  },
})

// HMR (Hot Module Replacement)
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
}
