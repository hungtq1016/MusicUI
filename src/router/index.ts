import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Managerment.vue'),
      children: [
        {
          path: '',
          name: 'table',
          component: () => import('@/pages/Managerment/Dashboard.vue'),
        }
        
      ]
    },
    {
      path: '/songs',
      name: 'songs',
      component: () => import('@/views/Managerment.vue'),
      children: [
        {
          path: '',
          name: 'songs-table',
          component: () => import('@/pages/Managerment/Dashboard.vue'),
        }
        
      ]
    },
    {
      path: '/albums',
      name: 'albums',
      component: () => import('@/views/Managerment.vue'),
      children: [
        {
          path: '',
          name: 'albums-table',
          component: () => import('@/pages/Managerment/Dashboard.vue'),
        }
        
      ]
    },
    {
      path: '/authenticate',
      name: 'auth',
      component: () => import('@/views/Auth.vue'),
      children: [
        {
          path: '',
          name: 'login',
          component: () => import('@/pages/Auth/Login.vue'),
        },
        {
          path: 'register',
          name: 'register',
          component: () => import('@/pages/Auth/Register.vue'),

        },
        {
          path: 'reset-password',
          name: 'resetpassword',
          component: () => import('@/pages/Auth/Reset.vue'),
        }
      ]
    }
  ]
})

export default router
