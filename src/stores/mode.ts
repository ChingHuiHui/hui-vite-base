import { acceptHMRUpdate, defineStore } from 'pinia'
import { MODE } from '@/libs/enum'

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

      if (userPrefersDark) {
        this.setThemeMode(MODE.DARK)
        return
      }

      this.setThemeMode(MODE.LIGHT)
    },
    setThemeMode(mode: string): void {
      this.themeMode = mode
    },
    toggle(): void {
      this.setThemeMode(this.themeMode === MODE.DARK ? MODE.LIGHT : MODE.DARK)
    },
  },
})
