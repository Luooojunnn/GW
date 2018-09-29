import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/HomePage'
import Index from '@/components/Index'
import Pages from '@/components/Pages'
import allPages from '@/components/allPages'
import YzmForm from '@/components/YzmForm'
import NotFound from '@/components/NotFound'

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
          path: 'allPages',
          name: 'allPages',
          component: allPages
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
      component: NotFound
    }
  ]
})
