import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/App.vue'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      components: Home
    }
  ]
})