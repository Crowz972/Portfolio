import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ShowcaseView from '@/views/ShowcaseView.vue'
import ProjectIdShowcase from '@/views/ProjectIdShowcase.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/showcase',
      name: 'showcase',
      component: ShowcaseView,
    },
    {
      path: '/showcase/project/:id',
      name: 'project',
      component: ProjectIdShowcase,
    },
  ],
})

export default router
