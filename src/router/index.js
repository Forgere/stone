import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home.vue'
import CurrentCard from '../components/CurrentCard.vue'
import LeftCard from '../components/CurrentLeft.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/currentLeft',
      name: 'LeftCard',
      component: LeftCard
    },
    {
      path: '/currentAll',
      name: 'CurrentCard',
      component: CurrentCard
    }
  ],
  linkActiveClass: 'active'
})
