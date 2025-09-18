import { createRouter, createWebHistory } from 'vue-router'
import Hero from '../views/HeroPage.vue'
import Login from '../views/login.vue'
import Register from '../views/register.vue'

const routes = [
  { path: '/', component: Hero },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
