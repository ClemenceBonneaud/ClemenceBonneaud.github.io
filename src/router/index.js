import { createRouter, createWebHistory } from 'vue-router'
import Accueil from '../views/Accueil.vue'
import About from '../views/About.vue'
import Skills from '../views/Skills.vue'
import Experiences from '../views/Experiences.vue'
import Life from '../views/Projects.vue'
import Contact from '../views/Contact.vue'
import Game from '../views/Game.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Accueil
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/skills',
      name: 'skills',
      component: Skills
    },
    {
      path: '/experiences',
      name: 'experiences',
      component: Experiences
    },
    {
      path: '/projects',
      name: 'projects',
      component: Life
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/game',
      name: 'game',
      component: Game
    },

  ]
})

export default router
