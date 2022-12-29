import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DokterView from '../views/DokterView.vue'
import PasienView from '../views/PasienView.vue'
import formPasien from '../views/formPasien.vue'
import AlamatForm from '../views/AlamatForm.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/dokter',
    name: 'dokter',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: DokterView
  },
  {
    path: '/pasien',
    name: 'pasien',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: PasienView
  },
  {
  path: '/formpasien',
  name: 'formpasien',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: formPasien
},
{
path: '/alamat',
name: 'AlamatForm',
// route level code-splitting
// this generates a separate chunk (about.[hash].js) for this route
// which is lazy-loaded when the route is visited.
component: AlamatForm
}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
