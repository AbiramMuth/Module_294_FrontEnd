app.component("cart-display", {
    props:["card", "cartTotal","discountedTotal"],
    template: /*html*/
    `
         <!--Bouton d'ajout au panier-->
         <div class="cart">
         <h2>🍽 Mon panier ({{card.length}})</h2>
         <ul class="gadget">
             <li v-for="(element, index) in card" v-bind:key="index">
                 {{element.name}} - {{element.price}}
                 <button v-on:click="removeOne" >➖</button>
                 {{element.quantity}}
                <button @add-to-cart="addToCart" >➕</button>
                 <button v-on:click="removeFromCart(element)" class="remove-btn">❌</button>
             </li>
         </ul>
         <p>Votre panier est vide</p>
     </div>
    `,
    methods:{
        addToCart() {
            // Émet un événement vers le parent pour ajouter le gadget au panier
        this.$emit("add-to-cart", this.gadget); // Émet l'événement add-to-cart avec le gadget en paramètre, add-to-cart qui est appélé dans le html de gadget-display
        },
        // méthode pour supprimer un produit du panier
        // removeFromCard est la méthode qui est appelée dans le html de cart-display
        removeFromCart(){
            this.$emit("remove-from-cart", this.index); // Émet l'événement remove-from-cart avec l'index de l'élément à supprimer
          } 
    }
})