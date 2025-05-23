app.component('product-display', {
    props: { 
      premium: {
        type: Boolean,
        required: true
      }
    },
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
  
          <p>Shipping: {{ shipping }}</p>
          
          <!-- solution -->
          <!--<product-details :details="details"></product-details>-->
          <!-- solution -->
  
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

          <!-- bouton remove du panier -->
          <button 
          class="button" 
          :class="{ disabledButton: !inStock }" 
          :disabled="!inStock" 
          v-on:click="removeFromCart">
          Remove Item
        </button>
        </div>
      </div>
      <review-list v-if="reviews.length" :reviews="reviews"></review-list> <!-- affiche le composant review-list,  sauf quand il est vide -->
      <review-form @review-submitted="addReview"></review-form> <!-- affiche le composant review-form -->
    </div>`,
    data() {
      return {
          product: 'Socks',
          brand: 'Vue Mastery',
          selectedVariant: 0,
          details: ['50% cotton', '30% wool', '20% polyester'],
          variants: [
            { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50 },
            { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 },
          ],
          reviews:[], // stocke les avis des utilisateurs
      }
    },
    methods: {
        addToCart() {
            this.$emit('add-to-cart', this.variants[this.selectedVariant].id) // émet un événement appelé add-to-cart
        },
        removeFromCart() {
            this.$emit('remove-from-cart', this.variants[this.selectedVariant].id) // émet un événement appelé remove-from-cart
        },
        updateVariant(index) {
            this.selectedVariant = index
        },
        addReview(review){
            this.reviews.push(review)
        }
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product
        },
        image() {
            return this.variants[this.selectedVariant].image
        },
        inStock() {
            return this.variants[this.selectedVariant].quantity
        },
        shipping() {
          if (this.premium) {
            return 'Free' // retourne free, si premium est vrai
          }
          return 2.99
        }
    }
  })
