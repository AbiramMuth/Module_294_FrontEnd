// Un composant encapsule la logique de l'affichage d'un gadget (html, css, js) et évite de dupliquer le code
// gadget display est un composant qui affiche un gadget
app.component("gadget-display", {
    // props permet de recevoir des données du parent, comme name, price, image, inStock (pour gadget)
    props: ["gadget"], // Le gadget est passé en tant que prop depuis le parent
    template: 
    /*html*/ 
    `
    <div class="gadget">
    <img v-bind:src="gadget.image" alt="Gadget">
    <h2>{{ gadget.name }}</h2>
    <p>Prix : {{ gadget.price }}€</p>
    <p :class="{'in-stock': gadget.inStock, 'out-of-stock':
   !gadget.inStock}">
    {{ gadget.inStock ? '✅ En stock' : '❌ En rupture de stock' }}
    </p>
    <button @click="addToCart" :disabled="!gadget.inStock">Ajouter au
   panier</button>
    </div>
    `,
    methods: {
    addToCart() {
    // Émet un événement vers le parent pour ajouter le gadget au panier
this.$emit("add-to-cart", this.gadget); // Émet l'événement add-to-cart avec le gadget en paramètre, add-to-cart qui est appélé dans le html de gadget-display
},
    },
});