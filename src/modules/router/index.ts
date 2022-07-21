import { createRouter, createWebHistory } from 'vue-router'
import TopPage from '@/pages/TopPage.vue'
import LoginPage from '@/pages/LoginPage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: TopPage,
    },
    {
      path: '/login',
      name: 'LoginPage',
      component: LoginPage 
    }
  ]
})

export default router