import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/login/LoginPage.vue'
import Home from '../views/home/HomePage.vue'
import CreateLogin from '../views/createLogin/CreateLoginPage.vue'

const routes = [
  // Default route of the webstile right now : 
  // Home -> Homepage of the website, this is where the map will appeard
  // Login -> First entry of the website, this is where the user will enter is credential
  { path: '/', name: 'login', component: Login },
  { path: '/home', name: 'home', component: Home, meta: { requiresAuth: true } },
  { path: '/createLogin', name: 'createLogin', component: CreateLogin}
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router