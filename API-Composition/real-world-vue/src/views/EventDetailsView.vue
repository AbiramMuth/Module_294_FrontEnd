<script setup>
import { ref, onMounted } from 'vue'
import EventService from '@/services/EventService.js'

const props = defineProps({
    id:{
        required: true,
    },
})

const event = ref(null)

onMounted(() => {
    EventService.getEvent(props.id) // on utilise le service pour récupérer l'événement
        .then((response) => {
            event.value = response.data
        })
        .catch((error) => {
            console.log(error)
        })
})
</script>

<template>
    <div v-if="event"> <!-- nous pouvons nous assurer qu'elle ne s'affiche que lorsque l'événement existe dans nos données -->
        <h1>{{ event.title }}</h1>
        <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
        <p>{{ event.description }}</p>
    </div>
</template>