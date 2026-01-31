import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '../views/AboutView.vue'
import ProjectsView from '../views/ProjectsView.vue'
import SkillsView from '../views/SkillsView.vue'
import ExperienceView from '../views/ExperienceView.vue'
import ContactView from '../views/ContactView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: AboutView },
    { path: '/proyectos', component: ProjectsView },
    { path: '/habilidades', component: SkillsView },
    { path: '/experiencia', component: ExperienceView },
    { path: '/contacto', component: ContactView },
  ],
})

export default router
