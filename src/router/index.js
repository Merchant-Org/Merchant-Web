import { createRouter, createWebHistory } from 'vue-router'
import Hero from '../views/HeroPage.vue'
import Login from '../views/Login.vue'
import Create from '../views/create-store.vue'
import UserRegister from '../views/UserRegister.vue'

const routes = [
  { path: '/', component: Hero },
  { path: '/login', component: Login },
  { path: '/create-store', component: Create },
  { path: '/UserRegister', name: 'UserRegister', component: UserRegister }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
