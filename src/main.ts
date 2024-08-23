import './assets/index.css'

import { createApp } from 'vue'
import App from './App.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons'

const app = createApp(App)
library.add(faSyncAlt)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
