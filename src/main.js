import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store';
import api from './api/api.js'  
import filter from "./filter/filter.js"
// 公共样式表
import './assets/common.less'

Vue.config.productionTip = false
Vue.prototype.api = api

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
