my_app.component('product-display',{
    template:
    /*html*/
    `<div class="product-display">
<div class="product-container">
<div class="product-image">
<img v-bind:src="image">
</div>
<div class="product-info">
<h1>{{ title }}</h1>
<p v-if="inStock">In Stock</p>
<p v-else>Out of Stock</p>
<div
v-for="(variant, index) in variants"
:key="variant.id"
@mouseover="updateVariant(index)"
class="color-circle"
:style="{ backgroundColor: variant.color }">
</div>
<button
class="button"
:class="{ disabledButton: !inStock }"
:disabled="!inStock"
v-on:click="addToCart">
Add to Cart
</button>
</div>
</div>
</div>`,
//objet
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
})

my_app.component('product-display',{
    template: /*html*/``
})