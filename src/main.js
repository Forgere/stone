import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store.js'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
/* eslint-disable no-new */
Vue.use(ElementUI)
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
