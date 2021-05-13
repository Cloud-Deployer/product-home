import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import {BootstrapVue} from "bootstrap-vue"
import "bootstrap/dist/css/bootstrap.css"
// import "bootstrap-vue/dist/bootstrap-vue.css"
import 'vuetify/dist/vuetify.min.css'
import i18n from './plugins/i18n.js'

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(vuetify);


new Vue({
  router,
  vuetify,
  i18n,
  render: h => h(App)
}).$mount('#app')
