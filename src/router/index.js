import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Find from '@/components/Find'
import List from '@/components/List'
import Maypage from '@/components/MayPage'
import Detaile from '@/components/Detaile'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path:'/Find',
      name:'Find',
      component:Find
    },
    {
      path:'/List',
      name:'List',
      component:List
    },
    {
      path:'/Maypage',
      name:'Maypage',
      component:Maypage
    },
    {
      path:'/Detaile/:goods_id',
      name:'Detaile',
      component: Detaile
    }
  ]
})
