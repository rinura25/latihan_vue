// import Vue from 'vue'
import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import router from './router'
// import getPasien from './components/getPasien.vue'

// Vue.component('get-pasien', getPasien)

createApp(App).use(router).mount('#app')
