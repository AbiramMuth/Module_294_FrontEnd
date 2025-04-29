<script setup>
import { ref } from 'vue' // importation de la fonction ref qui permet de créer des références réactives

defineProps({
    event: {
        type: Object,
        required: true
    }
}) // définition des propriétés du composant, qui est un objet contenant les informations de l'événement
</script>

<template>
    <RouterLink to="event/123">
        <div class="event-card">
            <h2>{{ event.title }}</h2>  <!-- Affiche le titre de l'événement et l'heure et la date -->
            <span>@{{ event.time }} on {{ event.date }}</span>
        </div>
    </RouterLink>
</template>

<style scoped>
.event-card{
    padding: 20px;
    width: 250px;
    cursor: pointer; 
    border: 1px solid #39495c;
    margin-bottom: 18px;
}
.event-card:hover{
    transform: scale(1.01); /* effet de zoom au survol */
    box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
</style>
