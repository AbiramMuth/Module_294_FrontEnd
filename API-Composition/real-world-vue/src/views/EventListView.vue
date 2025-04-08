
<script setup>
import EventCard from '@/components/EventCard.vue' // importation du composant EventCard
import { ref, onMounted } from 'vue' // importation de la fonction ref qui permet de créer des références réactives
import axios from 'axios' // importation de la bibliothèque axios pour faire des requêtes HTTP

const events = ref(null)
</script>

<template>
<h1>Events for Good</h1>
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" /> <!-- boucle sur les événements et affiche le composant EventCard pour chaque événement -->
  </div>
</template>

<style scoped> /* grâce à scoped, le style est appliqué uniquement au composant HomeView.vue */
/* utilisation de flexbox pour centrer les cartes */
.events{
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>