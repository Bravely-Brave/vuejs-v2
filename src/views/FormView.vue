<!-- les datas rentrer dans le formulaire s'affiche dans la console section array  -->

<template>


  <form @submit.prevent="ajoutProd">
    <input type="text" placeholder="nom" v-model="formData.nom" />
    <input type="number" placeholder="prix" v-model="formData.prix" />
    <input type="number" placeholder="stock" v-model="formData.stock" />

    <button type="submit">AJOUTER</button>
  </form>

  <div>
    <div>
      <!-- v-for pour boucle/ key : pour chaque produit dans mon tableau products et mettre une clé (clé unique qui différencie chaque produit) il va creer une div pour chaque produit qui existe-->
      <div v-for="product in products" :key="product.nom">
        <!-- grace aux PROPS -->
        <CarteProd :product="product" />
      </div>
    </div>
  </div>
</template>

<script>
// import FormProd from '../components/FormProd.vue'

import CarteProd from "../components/CarteProd.vue";
export default {
  nom: "FormView",
  compenents: {
    CarteProd,
    //     // FormProd,
  },
  computed: {
    // on recupere nos produit QUI SONT DANS STORE
    products() {
      return this.$store.state.Products;
    },
  },

  data() {
    return {
      formData: {
        nom: "",
        prix: null,
        stock: null
      },
    };
  },

  methods: {
    // on push tout ce qui dans formdata
    ajoutProd() {
      if (this.formData.prod == '' || this.formData.prix == null || this.formData.stock == null) return;
      // pour qu'on puisse pas repeter le mm produit
      if (
        this.$store.state.Products.find(product => product.nom === this.formData.nom))return

      // comment stocker  le tableau qui est dans le store below
      this.$store.commit("ajoutProd", this.formData);

      // Le produit s'ajoute et ne se supprime pas, qaund je push un nouvel utilisateur, mon formulaire se vide et ne supprime pas l'autre
      this.formData = {
        nom: "",
        prix: null,
        stock: null
      };
    },
  },
};
</script>

<style></style>
