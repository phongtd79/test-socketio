import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue')
  },
  // {
  //   path: '/audio',
  //   name: 'AudioPage',
  //   component: () => import('@/views/AudioPage.vue')
  // },
  {
    path: '/play',
    name: 'PlayPage',
    component: () => import('@/views/PlayPage.vue')
  },
]                  
                
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
