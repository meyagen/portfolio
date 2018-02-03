import Vue from 'vue';
import App from './App';
import router from './router';

require('node_modules/font-awesome/css/font-awesome.min.css');

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
