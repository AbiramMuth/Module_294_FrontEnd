<script>
import { ref, onMounted } from 'vue' // importation de la fonction ref qui permet de créer des références réactives
import EventService from '@/services/EventService'

const event = ref(null) // création d'une référence réactive pour stocker l'événement
const id = ref(123) // création d'une référence réactive pour stocker l'identifiant de l'événement

onMounted(() => {
    EventService.getEvent(id.value)
    .then((respoonse) => {
        event.value = response.data // stockage de l'événement dans la variable réactive event
    })
    .catch((error) => {
        console.log(error) // gestion des erreurs
    })
})
</script>

<template>
<div>
    <h1>{{ event.title }}</h1>
    <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
    <p>{{ event.description }}</p>
</div>
</template>

<style>

</style>