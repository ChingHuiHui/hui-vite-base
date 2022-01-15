import { onBeforeMount, watchEffect } from 'vue'
import { useModeStore } from '@/stores/mode'
import { storeToRefs } from 'pinia'

export default (): { isDarkMode: ref<string>; toggle: () => void } => {
  const modeStore = useModeStore()

  const { isDarkMode } = storeToRefs(modeStore)

  onBeforeMount(() => {
    modeStore.init()
  })

  return {
    isDarkMode,
    toggle: modeStore.toggle,
  }
}
