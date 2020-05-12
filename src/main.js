/**
 * *@2020-5
 * *@author mikeYuan 
 */


import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store';
import api from './api/api.js'  
import filter from "./filter/filter.js"
// 公共样式表
import './assets/common.less'

// fastClick 
import fastClick from 'fastclick'

// px2rem
import 'lib-flexible/flexible'

Vue.config.productionTip = false
Vue.prototype.api = api
fastClick.attach(document.body)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

console.log('当前的环境是:', process.env.VUE_APP_ENV)

console.log(process.env.VUE_APP_URL)
