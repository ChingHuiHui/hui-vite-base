import { acceptHMRUpdate, defineStore } from 'pinia'
import { MODE } from '@/libs/enum'

class LocalStorage {
  set(key: string, value: string, ttl: number = 30): void {
    const data = {
      value,
      ttl: Date.now() + ttl * 10000,
    }

    localStorage.setItem(key, JSON.stringify(data))
  }

  get(key: string) {
    const data = localStorage.getItem(key)

    if (!data) {
      return null
    }

    const { ttl, value } = JSON.parse(data)

    if (Date.now() > ttl) {
      localStorage.removeItem(key)
      return null
    }

    return value
  }
}

const storage = new LocalStorage()

export const useModeStore = defineStore('modeStore', {
  state: (): { themeMode: string } => ({
    themeMode: MODE.LIGHT,
  }),
  getters: {
    isDarkMode(): boolean {
      return this.themeMode === MODE.DARK
    },
  },
  actions: {
    init(): void {
      const userPrefersDark = window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches

      const preferenceFromStorage = storage.get('theme-mode')

      if (
        preferenceFromStorage === MODE.DARK ||
        (!preferenceFromStorage && userPrefersDark)
      ) {
        this.setThemeMode(MODE.DARK)
        return
      }

      this.setThemeMode(MODE.LIGHT)
    },
    setThemeMode(mode: string): void {
      this.themeMode = mode
    },
    toggle(): void {
      const mode = this.themeMode === MODE.DARK ? MODE.LIGHT : MODE.DARK

      this.setThemeMode(mode)
      storage.set('theme-mode', mode)
    },
  },
})

// HMR (Hot Module Replacement)
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useModeStore, import.meta.hot))
}

// HMR (Hot Module Replacement)
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useModeStore, import.meta.hot))
}
