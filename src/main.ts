import { createApp } from 'vue'
import App from './App.vue'
import './assets/index.css'
import { router } from '@/modules/router'
import { createPinia } from 'pinia'

createApp(App)
  .use(router)
  .use(createPinia())
  .mount('#app')
