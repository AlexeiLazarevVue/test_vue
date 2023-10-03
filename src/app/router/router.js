import { createRouter, createWebHashHistory } from "vue-router";
import MainPage from '@/pages/MainPage'
import BasketPage from '@/pages/BasketPage'

const routes = [
  {
    path: '/',
    component: MainPage
  },
  {
    path: '/basket',
    component: BasketPage
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router