import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/HomePage'
import Index from '@/components/Index'
import Pages from '@/components/Pages'
import allPages from '@/components/allPages'
import YzmForm from '@/components/YzmForm'
import VIPSearch from '@/components/VIPSearch'
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
          name: '文章',
          component: Pages
        },
        {
          path: 'allPages',
          name: '所有文章',
          component: allPages
        },
        {
          path: 'YzmForm',
          name: '找回密码',
          component: YzmForm
        },
        {
          path: 'VIPSearch',
          name: '会员搜索',
          component: VIPSearch
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
