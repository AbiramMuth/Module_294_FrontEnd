const product = 'Socks';
const description = "A warm fuzzy pair of socks.";
const etml = 'https://www.etml.ch';

// Création d'une application Vue
const my_app = Vue.createApp({
    // objet
    data() {
 return{
    // données
        product: 'Boots',
        description: description,
        image: './assets/images/socks_green.jpg',
        SiteEtml: etml,
        inStock: true, // booléen
        }
    }
});
