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
  getters: {
    nextYearAge(state): number {
      return state.age + 1
    },
    // can use another getter's value, even the value from another store.
    info(state): string {
      return `${state.name} ${this.nextYearAge}`
    },
  },
  actions: {
    // if you want to use the action from another store. yes! u can do it!
    increase() {
      this.age++
    },
  },
})

// HMR (Hot Module Replacement)
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
}
