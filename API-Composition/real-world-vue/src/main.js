
import { createApp } from 'vue' // Importation de la méthode createApp depuis Vue
import { createPinia } from 'pinia'

import App from './App.vue' // Importation du composant App
import router from './router'

const app = createApp(App) // Création de l'application Vue avec le composant App

app.use(createPinia()) // Utilisation d'une instance de Pinia pour la gestion d'état
app.use(router)

app.mount('#app') // Montage de l'application sur l'élément HTML avec l'ID 'app'
