import { createRouter, createWebHashHistory } from 'vue-router'
import FormView from '../views/FormView.vue'
import ProdView from '../views/ProdView.vue'

const routes = [
  {
    path: '/',
    name: 'form',
    component: FormView
  },
  {
    path: '/products',
    name: 'products',
    component: ProdView
  }]

    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
//     component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
//   }
// ]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
