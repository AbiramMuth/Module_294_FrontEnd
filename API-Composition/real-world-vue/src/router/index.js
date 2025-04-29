import { createRouter, createWebHistory } from 'vue-router' // Importation de la bibliothèque vue-router
import EventListView from '../views/EventListView.vue' // Importation du composant HomeView
import AboutView from '../views/AboutView.vue' // Importation du composant AboutView
import EventDetailsView from '../views/EventDetailsView.vue' // Importation du composant EventDetailsView

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'event-list',
      component: EventListView,
    },
    {
      path: '/event/123',
      name: 'event-details',
      component: EventDetailsView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
  ],
})

export default router
