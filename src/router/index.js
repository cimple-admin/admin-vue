import { createRouter, createWebHistory } from 'vue-router'
import needAuth from './needAuth'

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
router.add
export default router
