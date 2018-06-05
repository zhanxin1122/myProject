import Home from '@/components/pages/home'
import HomeMain from '@/components/pages/home/main'
import Error404 from '@/components/pages/error/404'
import Product from '@/components/pages/product'
import Resolve from '@/components/pages/resolve'
import News from '@/components/pages/news'
import NewsDetail from '@/components/pages/news/detail'
import Partner from '@/components/pages/partner'
import Abort from '@/components/pages/abort'
import CompIntro from '@/components/pages/abort/compIntro'
import Honor from '@/components/pages/abort/honor'
import Process from '@/components/pages/abort/process'
import Develop from '@/components/pages/abort/develop'
import WorkChance from '@/components/pages/abort/workChance'
import ContactUs from '@/components/pages/abort/contactUs'

export const routes = [{
  path: '/',
  name: 'home',
  redirect: '/home',
  component: Home,
  children: [
    {
      path: 'home',
      name: 'home_main',
      component: HomeMain
    },
    {
      path: 'product',
      name: 'products',
      component: Product
    },
    {
      path: 'resolve',
      name: 'resolves',
      component: Resolve
    },
    {
      path: 'news',
      name: 'compnews',
      component: News
    },
    {
      path: 'newsDetail',
      name: 'newsDetail',
      component: NewsDetail
    },
    {
      path: 'partner',
      name: 'partners',
      component: Partner
    },
    {
      path: 'abort/',
      name: 'aborts',
      component: Abort,
      children: [{
        path: 'compIntro',
        name: 'compIntro',
        component: CompIntro
      }, {
        path: 'honor',
        name: 'honor',
        component: Honor
      }, {
        path: 'process',
        name: 'process',
        component: Process
      }, {
        path: 'develop',
        name: 'develop',
        component: Develop
      }, {
        path: 'workChance',
        name: 'workChance',
        component: WorkChance
      }, {
        path: 'contactUs',
        name: 'contactUs',
        component: ContactUs
      }]
    }
  ]
}, {
  path: '/404',
  name: '404',
  component: Error404
}, {
  path: '/*',
  name: 'page404',
  component: Error404
}]

export default {
  routes
}
