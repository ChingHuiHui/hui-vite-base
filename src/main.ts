import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'

import './assets/styles/index.css'

const app = createApp(App)
const pinia = createPinia()
pinia.use(({ store }) => {
  store.hello = 'world'
})
app.use(pinia).mount('#app')
