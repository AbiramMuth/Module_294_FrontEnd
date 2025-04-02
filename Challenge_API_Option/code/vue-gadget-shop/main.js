const app = Vue.createApp({
    data(){
        return{
            title: 'Vue Gadget Shop',
            description: 'Découvrez les derniers gadgets électroniques de hautes technologies !',
   
            gadgets: [{id: 1, name: 'Smartphone XZ', price: 799, image: './assets/phone.jpg', inStock: true, quantity: 1 },
                      {id: 2, name: 'Laptop Pro', price: 1299, image: './assets/laptop.jpg', inStock: false, quantity: 1 },
                      {id: 3, name: 'Airpods', price: 199, image: './assets/earbuds.jpg', inStock: true, quantity: 1 },
            ],
            card:[], // tableau pour le panier

        }
    },
    methods:{
        // ajouter un produit au panier
        
        // PROBLEME AJOUTE plusieurs fois le même produit au panier
        addToCart(gadget){
          //  this.card.push(gadget);
           
          // affiche pas plus de 3 gadgets dans le panier
         if(this.card.length >= 3){
                // incremente la quantité du gadget dans le panier
                gadget.quantity ++ ;
                gadget.price += gadget.price;
         }
         else{
            // on ajoute le gadget au panier
                this.card.push(gadget);  
         }
          /*if(this.gadget.quantity == 1){
          
            gadget.quantity ++ ;
            }
            else{
            //this.card[gadget.price + gadget.price];
            this.card.push(gadget);
            gadget.quantity ++ ;
            }*/
        },
        // Décrementer la quantité d'un produit dans le panier
        removeOne(gadget){
            if(this.card[gadget].quantity > 1){
                gadget.quantity -= 1;
                gadget.price -= gadget.price;
            }
            else{
                this.removeFromCart(gadget);
            }
        },
        // supprimer un produit du panier
        removeFromCart(index){
            this.card.splice(index, 1);
        },
    },
    // valeur calculée (problème ici)
    computed:{
        // additionne les prix des produits dans le panier
        cartTotal(){
           
            let total = 0;
            // on parcourt le tableau des produits du panier
            // et on additionne les prix de chaque produit
            for(let i = 0; i < this.card.length; i++){
                total += this.card[i].price;
            }

            return total 
        },
        // valeur calculée pour le total avec réduction
        discountedTotal(){
            // si le total est supérieur à 1000$, on applique une réduction de 10%
            return this.cartTotal * 0.9
        }
    }
});
