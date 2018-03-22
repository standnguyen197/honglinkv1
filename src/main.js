// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueSocketio from 'vue-socket.io';
var base_url = window.location.hostname;
Vue.use(VueSocketio, base_url);
Vue.config.productionTip = false
Vue.use(BootstrapVue)
import vueHeadful from 'vue-headful';
Vue.component('vue-headful', vueHeadful);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
