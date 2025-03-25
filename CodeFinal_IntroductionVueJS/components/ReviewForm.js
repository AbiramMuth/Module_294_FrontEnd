// composant qui permet de soumettre un avis sur un produit (formulaire)
app.component('review-form', {
    template:
    /*html*/
    `<form class="review-form" @submit.prevent="onSubmit">
    <h3>Leave a review</h3>
    <label for="name">Name:</label><input id="name" v-model="name"> <!-- le v-model permet de lier la valeur de l'input à la propriété name-->
    <label for="review">Review:</label><textarea id="review" v-model="review"></textarea> <!-- le v-model permet de lier la valeur de l'input à la propriété review-->
    <label for="rating">Rating:</label>
    <select id="rating" v-model.number="rating">
        <option>5</option>
        <option>4</option>
        <option>3</option>
        <option>2</option>
        <option>1</option>
    </select>

    <label for="recommend">Voulez vous recommender ce produit??</label>
    <select id="recommend" v-model="recommend">
    <option>oui</option>
    <option>non</option>
    </select>
<input class="button" type="submit" value="Submit">
</form>`,
// data est une fonction qui retourne un objet
data() {
return {
name: '', // stocke le nom de l'utilisateur lorsque le formulaire est soumis
review: '', // stocke l'avis de l'utilisateur lorsque le formulaire est soumis
rating: null, // stocke la note de l'utilisateur lorsque le formulaire est soumis
recommend: null // stocke la recommandation de l'utilisateur lorsque le formulaire est soumis
}
},
methods:{
    // méthode qui est appelée lorsque le formulaire est soumis
    onSubmit(){
        // si l'un des champs du formulaire est vide, on affiche une alerte (popup)
        if(this.name === '' || this.review === '' || this.rating === null || this.recommend === null){
            alert('Veuillez remplir tous les champs du formulaire')
            return
        }
        let productReview = {
            name: this.name,
            review: this.review,
            rating: this.rating,
            recommend: this.recommend
            }
            this.$emit('review-submitted', productReview)
            this.name = ''
            this.review = ''
            this.rating = null
            this.recommend = null 
    }
}
})