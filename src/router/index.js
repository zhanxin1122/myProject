import Vue from 'vue'
import Router from 'vue-router'
import { routes } from './routers'

Vue.use(Router)
const router = new Router({
  mode: 'hash',
  routes
})

router.beforeEach((to, from, next) => {
  next()
  document.documentElement.scrollTop = 0
  document.getElementsByTagName('header').length !== 0 && document.getElementsByTagName('header')[0].setAttribute('class', '')
})
router.afterEach((to, from) => {
})

export default router
