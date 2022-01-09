import { createApp } from 'vue'
import App from './App.vue'

import { createPinia } from 'pinia'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import './assets/styles/index.css'

const app = createApp(App)
const pinia = createPinia()

const fontAwesomePackages = [fas, fab, far]

function loadFontAwesome() {
  fontAwesomePackages.forEach((pack) => library.add(pack))

  app.component('font-awesome-icon', FontAwesomeIcon)
}

loadFontAwesome()

app.use(pinia).mount('#app')
