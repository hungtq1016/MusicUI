import { createRouter, createWebHistory } from 'vue-router'

import CalendarView from '@/views/CalendarView.vue'
import ECommerceView from '@/views/Dashboard/ECommerceView.vue'
import SettingsView from '@/views/Pages/SettingsView.vue'
import ProfileView from '@/views/ProfileView.vue'
import { i18n } from '@/utils/services/translations'

const routes = [
  {
    path: '/',
    name: 'eCommerce',
    component: ECommerceView,
    meta: {
      title: 'navigation.dashboard'
    }
  },
  {
    path: '/calendar',
    name: 'calendar',
    component: CalendarView,
    meta: {
      title: 'Calendar'
    }
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfileView,
    meta: {
      title: 'Profile'
    }
  },
  {
    path: '/pages/settings',
    name: 'settings',
    component: SettingsView,
    meta: {
      title: 'Settings'
    }
  },
  {
    path: '/audios',
    name: 'audios',
    component: ()=>import('@/views/AudioView.vue'),
    meta: {
      title: 'navigation.audio'
    }
  },
  {
    path: '/collections',
    name: 'collections',
    component: ()=>import('@/views/CollectionView.vue'),
    meta: {
      title: 'navigation.collection'
    }
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { left: 0, top: 0 }
  }
})
router.beforeEach((to, from, next) => {
  document.title = `${i18n.global.t(String(to.meta.title))} | MUSIC UI`
  next()
})

export default router
