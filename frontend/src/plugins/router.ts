import { createRouter, createWebHistory } from 'vue-router';
import MainLayout from '../layouts/MainLayout.vue';

const router = createRouter({
  history: createWebHistory(
    `${import.meta.env.VITE_EXTERNAL_PATH || '/'}dashboard`
  ),
  scrollBehavior() {
    return { top: 0 };
  },
  routes: [
    {
      path: '/',
      name: 'Layout', 
      component: () => MainLayout,
      children: [
        {
          path: '',
          name: 'Home',
          component: () => import('../pages/Home.vue')
        }
      ]
    }
  ]
});

router.beforeEach(async (to, from, next) => {
  next();
});

export default router;
