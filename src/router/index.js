import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home'
import News from '../views/News'

const routes = [
  { path: '/', component: Home },
  { path: '/news', component: News }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router