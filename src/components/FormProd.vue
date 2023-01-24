<!-- <template >
    

    <CarteProd :product="formData"/> -->
    
    <!-- <form >

       <input type="text" placeholder="nom" v-model="formData.nom">
       <input type="number" placeholder="prix" v-model="formData.prix">
       <input type="number" placeholder="stock" v-model="formData.stock"> 

       <button type="submit">AJOUTER</button>
    </form> -->

    <!-- <div >
        <div v-for="product in products" :key="product.nom"></div>

       

    </div> -->
    
<!-- </template> -->


<!-- <script>
import CarteProd from './CarteProd.vue'

export default {
    name: 'FormProd',

    components: {
        CarteProd
    },

   
    // data() {
    //     return {
            
    //         formData: {
    //             nom: '',
    //             prix: null,
    //             stock: null
    //         },
    //     }
    },
    methods: {
        // on push tout ce qui dans formdata
        ajoutProd() {
            if(this.formData.prod == '' || this.formData.prix == null) return
            // pour qu'on puisse pas repeter le mm produit
            if(this.$store.state.products.find(product => product.nom === this.formData.nom)) return
           

            // comment stocker  le tableau qui est dans le store below
            this.$store.commit('ajoutProd', this.formData)
            

// Le produit s'ajoute et ne se supprime pas, qaund je push un nouvel utilisateur, mon formulaire se vide et ne supprime pas l'autre
            this.formData = {
                nom: '',
                prix: null,
                stock: null
            }

        }
    }
}
</script> -->

<!-- 
<style scoped>
    .error {
        color: DARKred
    }

</style> -->