import { createRouter, createWebHistory } from 'vue-router'
import Home from '../../App.vue'
import LoginPage from '@/pages/LoginPage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      components: Home,
    },
    {
      path: '/login',
      name: 'LoginPage',
      components: LoginPage 
    }
  ]
})

export default router