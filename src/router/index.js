import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/login/LoginPage.vue'
import Home from '../views/home/HomePage.vue'

const routes = [
  // Default route of the webstile right now : 
  // Home -> Homepage of the website, this is where the map will appeard
  // Login -> First entry of the website, this is where the user will enter is credential
  { path: '/', name: 'login', component: Login },
  { path: '/home', name: 'home', component: Home, meta: { requiresAuth: true } },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router