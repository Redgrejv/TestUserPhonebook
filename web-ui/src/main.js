import Vue from 'vue';
import App from './App.vue';
import Axios from 'axios';
import VueAxios from 'vue-axios';
import ElementUI from 'element-ui';

import 'element-ui/lib/theme-chalk/index.css';
import router from './router';

const dotenv = require('dotenv');
dotenv.config({path: '../.env'});

Vue.use(ElementUI);
Vue.use(VueAxios, Axios);

Vue.config.productionTip = false

import store from "./store";
import global from './mixins/global';

Vue.mixin(global);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
