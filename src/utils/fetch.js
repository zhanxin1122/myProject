import axios from 'axios'
import router from '@/router'
import {
  MessageBox
} from 'element-ui'
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
// 创建实例
const service = axios.create({
  baseURL: 'http://www.general-elevator.com:3000', // 使用代理，不需要这只该项
  timeout: 30000 // 请求超时时间
})

// request拦截器
service.interceptors.request.use(config => {
  return config
}, error => {
  // Do something with request error
  console.log(error) // for debug
  Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(
  response => {
    let data = response.data
    // 登录超时
    if (!data.success && data.errCode === 9995) {
      MessageBox.alert(data.message, '登录超时', {
        type: 'error',
        callback: () => {
          // 跳转到登录页面
          router.push('/login')
        }
      })
    } else {
      return data
    }
  },
  error => {
    let errorInfo = {}
    errorInfo.isResolved = false
    console.log(JSON.stringify(error))
    let errCode = error.response.status
    errorInfo.errCode = errCode
    if (errCode === 404) {
      // 弹出登录超时的模态框
      errorInfo.isResolved = true
      MessageBox.confirm(error.response.data.message, '提示', {
        type: 'warning'
      }).then(() => {
        // store.state.loginUser = null;
        // store.state.token = null;
        // 跳转到登录页面
        router.push('/login')
      }).catch(() => {
        this.$msg({
          type: 'info',
          message: '已取消删除'
        })
      })
    } else {
      // 可以在此处继续写需要拦截的错误
    }
    return Promise.reject(errorInfo)
  }
)

export default service
