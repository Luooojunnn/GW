import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/HomePage'
import Index from '@/components/Index'
import Pages from '@/components/Pages'
import allPages from '@/components/allPages'
import YzmForm from '@/components/YzmForm'
import VIPSearch from '@/components/VIPSearch'
import NotFound from '@/components/NotFound'

import middle from '@/managePlatform/middle'
import publishPage from '@/managePlatform/publishPage'
import pageList from '@/managePlatform/pageList'

Vue.use(Router)

const router = new Router({
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
      path: '/backPlatform',
      name: 'middle',
      component: middle,
      redirect: 'backPlatform/publishPage',
      children: [
        {
          path: 'publishPage',
          name: '文章发布',
          component: publishPage
        },
        {
          path: 'pageList',
          name: '文章列表',
          component: pageList
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

export default router
