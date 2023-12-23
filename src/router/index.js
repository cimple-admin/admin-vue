import { createRouter, createWebHistory } from 'vue-router'
import needAuth from './needAuth'
import registerGuard from './guard'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/Login.vue')
    },
    ...needAuth
  ]
})

registerGuard(router)

export default router
