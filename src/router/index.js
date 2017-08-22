import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import header from '@/components/header'
import search from '@/components/search'
import login from '@/components/login'
import register from '@/components/register'
import order from '@/components/order'
import profile from '@/components/profile'
import food from '@/components/food_container/header_title'
import demo from '@/components/demo'
Vue.use(Router)
Vue.use(VueResource)
export default new Router({
  routes: [
    {
      path: '/',
      component: header
      // childeren: [
      //   {
      //     path: '/header_title',
      //     component: food
      //   }
      // ]
    },
    {
      path: '/search',
      component: search
    },
    {
      path: '/login',
      component: login
    },
    {
      path: '/register',
      component: register
    },
    {
      path: '/order',
      component: order
    },
    {
      path: '/profile',
      component: profile
    },
    {
      path: '/food_container/header_title',
      component: food
    },
    {
      path: '/demo',
      component: demo
    }
  ]
})
