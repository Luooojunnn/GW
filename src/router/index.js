import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/HomePage'
import Index from '@/components/Index'
import Pages from '@/components/Pages'
import YzmForm from '@/components/YzmForm'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'index',
      name: 'Home',
      component: Home,
      children: [
        {
          path: 'index',
          name: 'Index',
          component: Index
        },
        {
          path: 'Pages',
          name: 'Pages',
          component: Pages
        },
        {
          path: 'YzmForm',
          name: 'YzmForm',
          component: YzmForm
        }
      ]
    },
    {
      path: '*',
      name: 'nopage',
      component: Index
    }
  ]
})
