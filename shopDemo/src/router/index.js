/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({

  routes: [

    {
      path: '/shop',
      name: 'shop',
      component:resolve => require(['../views/shop.vue'], resolve),
      alias:'/',
      redirect: '/shop/shopHome',
      children: [
        { path: "/shop/shopHome",name: 'shopHome',component:resolve => require(['../views/shopHome.vue'], resolve)},
        { path: "/shop/shopClassify",name: 'shopClassify',component:resolve => require(['../views/shopClassify.vue'], resolve)},
        { path: "/shop/shopCart",name: 'shopCart',component:resolve => require(['../views/shopCart.vue'], resolve)},
        { path: "/shop/shopUser",name: 'shopUser',component:resolve => require(['../views/shopUser.vue'], resolve)},
      ]
    },
    {
      path: "/shopDeatil",
      name: 'shopUser',
      component:resolve => require(['../views/shopDeatil.vue'], resolve)
    }
  ],
})
