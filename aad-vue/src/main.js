import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import Vuelidate from 'vuelidate'
import VueAxios from 'vue-axios'
import axios from 'axios'
import App from './App.vue'
import router from './router'
import store from './store'
// scss style
import './assets/scss/index.scss'

Vue.config.productionTip = false
Vue.config.devtools = true
// BootstrapVue
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

// Vuelidate
Vue.use(Vuelidate)

// axios
axios.defaults.baseURL = 'http://localhost:1016'
Vue.use(VueAxios, axios)

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')
