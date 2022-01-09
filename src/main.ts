import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'

import './assets/styles/index.css'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia).mount('#app')
