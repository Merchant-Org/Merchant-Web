import { createRouter, createWebHistory } from 'vue-router'
import Hero from '../views/HeroPage.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import UserRegister from '../views/UserRegister.vue'

const routes = [
  { path: '/', component: Hero },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/UserRegister', name: 'UserRegister', component: UserRegister }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
