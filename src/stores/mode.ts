import { acceptHMRUpdate, defineStore } from 'pinia'

export const useModeStore = defineStore('modeStore', {
  state: (): { themeMode: string } => ({
    themeMode: 'light',
  }),
  getters: {
    isDarkMode(): boolean {
      return this.themeMode === 'dark'
    },
  },
  actions: {
    init() {
      const userPrefersDark = window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches

      if (userPrefersDark) {
        return this.setThemeMode('dark')
      }

      this.setThemeMode('light')
    },
    setThemeMode(mode: string): void {
      this.themeMode = mode
    },
  },
})
