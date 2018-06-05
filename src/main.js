// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 导入样式文件
import '@/assets/css/index.less'
// 注册element-ui组件
import './utils/elementui'
// 注册自定义指令
import '@/directives'
// axios
import fetch from '@/utils/fetch'

Vue.prototype.$fetch = fetch

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
