const product = 'Socks';
const description = "A warm fuzzy pair of socks.";
const etml = 'https://www.etml.ch';

// Création d'une application Vue
const my_app = Vue.createApp({
    // objet
    data() {
        return {
            // données
            product: product,   // nom du produit
            brand: 'Vue Mastery', // titre
            description: description,
            SiteEtml: etml,  // lien du site
            inventory: 11,
            onSale: true,
            details: ['50% coton', '30% wool', '20% polyester'],  // tableau
            variants: [{ id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50 },
            { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 }],
            sizes: ['S', 'M', 'L', 'XL'],
            cart: 0, // la valeur de carte change
            selectedVariant: 0,
        }
    },
    methods: {
        addToCart() {
            this.cart += 1 // $ chaque clic cart s'incrémente de 1
        },
        removeItem() {
            this.cart -= 1;
        },
        updateImage(variantImage) {
            this.image = variantImage
        },
        // permet de savoir quelle variant de produit est sélectionné
        updateVariant(index) {
            this.selectedVariant = index
        },
    },
    computed: {
        // titre de la page
        title() {
            return this.brand + ' ' + this.product
        },
        // choisi soit le premier image ou deuxieme qui se trouve dans le tableau variants en fonction de la valeur selectedVariant
        image() {
            return this.variants[this.selectedVariant].image
        },
        // Affiche l'image de la variante et affiche si'il est en stock ou en rupture, en utilisant la quantité
        inStock() {
            return this.variants[this.selectedVariant].quantity
        },
        sale(){
            if(this.onSale){
               return onSale = this.brand + ' ' + this.product + ' is on sale!' // si c'est est true, affiche le message
            }
            return  '' // sinon affiche rien
        },
    },

});
