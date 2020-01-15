import Vue from 'vue'
import App from './App.vue'

import Vuelidate from 'vuelidate'

//Plugins
Vue.use(Vuelidate)

Vue.config.productionTip = false

import "@/assets/scss/main.scss"

new Vue({
  render: h => h(App),
}).$mount('#app')
