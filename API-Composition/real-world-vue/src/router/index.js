import { createRouter, createWebHistory } from 'vue-router'
import EventListView from '../views/EventListView.vue'
import EventDetailsView from '../views/EventDetailsView.vue'
import AboutView from '../views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'event-list', // nom de la route
      component: EventListView,
    },
    {
      path: '/about',
      name: 'about', // nom de la route
      component: AboutView,
    },
    {
      path: '/event/:id', // route dynamic
      name: 'event-details', // nom de la route
      props: true, // donne accès aux props
      component: EventDetailsView,
    },
  ],
})

export default router
