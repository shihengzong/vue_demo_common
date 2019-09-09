/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-09 11:29:10
 * @LastEditTime: 2019-09-09 15:21:28
 * @LastEditors: Please set LastEditors
 */
import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import store from './stores'

import axios from 'axios'
Vue.prototype.axios = axios;

Vue.config.productionTip = false
Vue.filter('setWH', (url, arg) => {
  return url.replace(/w\.h/, arg);
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
