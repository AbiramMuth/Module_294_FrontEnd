import axios from 'axios';

// créer une instance d'axios avec une configuration par défaut
const apiClient = axios.create({
    baseURL: 'https://my-json-server.typicode.com/Code-Pop/Real-World_Vue-3',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    }
})

export default{
    // renvoie tous les événements
    getEvents(){
        return apiClient.get('/events')
    },
    // prends un id comme argument et renvoie un événement spécifique
    getEvent(id){
        return apiClient.get('/events' + id) 
    }
}