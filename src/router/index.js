import Vue from 'vue'
import Router from 'vue-router'
import { routes } from './routers'

Vue.use(Router)
console.log(routes)
const router = new Router({
  mode: 'hash',
  routes
})

router.beforeEach((to, from, next) => {
  next()
})
router.afterEach((to, from) => {
})

export default router
