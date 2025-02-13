import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/restoraunts/:id/:name',
      name: 'restoraunts',
      component: () => import('../views/RestorauntsView.vue'),
      props: true
    },
    {
      path: '/restoraunts/single-restoraunt/:id/:restoranID',
      name: 'single-restoraunt',
      component: () => import('../views/SingleRestorauntView.vue'),
      props: true
    },
    {
      path: '/finish-order/:id',
      name: 'finish-order',
      component: () => import('../views/FinishOrderView.vue'),
      props: true
      
    },
    {
      path: '/order-manager',
      name: 'order-manager',
      component: () => import('../views/OrderManagerView.vue'),
      props: true
      
    },
    {
      path: '/single-order/:id',
      name: 'single-order',
      component: () => import('../views/SingleOrderView.vue'),
      props: true
      
    },
  ],
})

export default router
