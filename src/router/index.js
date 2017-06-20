import Vue from 'vue'
import Router from 'vue-router'
import DropDownMenu from '../pages/DropDownMenu'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    { path: '/', redirect: '/dropDownMenu'},
    {
      path: '/dropDownMenu',
      name: 'DropDownMenu',
      component: resolve => require(['../pages/DropDownMenu.vue'], resolve)
    }
  ]
})
