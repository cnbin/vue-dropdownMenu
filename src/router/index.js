import Vue from 'vue'
import Router from 'vue-router'
import Index from '../pages/Index'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: resolve => require(['../pages/Index.vue'], resolve)
    }
  ]
})
