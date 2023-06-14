import { createWebHistory, createRouter } from 'vue-router';
import AppSplashscreen from './components/AppSplashscreen.vue'

const routes = [
  {
    path: '/',
    name: 'app-splashscreen',
    component: AppSplashscreen
  },
  // More routes...
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
