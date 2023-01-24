import { createStore } from 'vuex'

export default createStore({
  state: {
    Products: [
      {
        nom: 'casque',
        prix: 600,
        stock: 2
      },

      {
        nom: 'crayon',
        prix: 5,
        stock: 10
      },

      {
        nom: 'cahier',
        prix: 20,
        stock: 10
      },

    ],
  },
  getters: {
  },
  mutations: {
    ajoutProd(state, product) {
      state.Products.push(product)
    }
  },
  actions: {
  },
  modules: {
  }
})
