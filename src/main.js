import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
import axios from 'axios';
import './mock/index.js';  // 该项目所有请求使用mockjs模拟
import './login.js' 
import './ui.js' 

Vue.config.productionTip = false;
Vue.prototype.$axios = axios;
axios.defaults.baseURL='http://127.0.0.1:8001';
var vm=new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})


