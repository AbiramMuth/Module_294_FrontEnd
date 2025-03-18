const product = 'Socks';
const description = "A warm fuzzy pair of socks.";
const etml = 'https://www.etml.ch';

// Création d'une application Vue
const my_app = Vue.createApp({
    // objet
    data() {
        return {
            // données
            product: 'Boots',
            description: description,
            image: './assets/images/socks_green.jpg', // emplacement de l'img
            SiteEtml: etml,  // lien du site
            inStock: false, // booléen
            inventory: 8,
            onSale: true,
            details: ['50% coton', '30% wool', '20% polyester'],  // tableau
            variants: [{ id: 2234, color: 'green' }, { id: 2235, color: 'blue' }],
            sizes: ['S', 'M', 'L', 'XL'],
            cart: 0,
        }
    },
    methods: {
        addToCart() {
            this.cart += 1
        }
    }

});
