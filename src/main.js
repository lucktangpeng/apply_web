// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import store from './store/store'
import axios from "axios"
import global from "./common/common"
// import jQuery from "jquery"
import jQuery from "jquery"
Vue.prototype.$axios = axios
Vue.prototype.com = global
Vue.config.productionTip = false
Vue.use(ElementUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  // router,
  store,
  router,
  components: { App },
  template: '<App/>'
})
