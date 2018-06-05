import axios from 'axios'
import qs from 'qs'
import router from '@/router'
import {
  MessageBox
} from 'element-ui'
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
// 创建实例
const service = axios.create({
  // baseURL: 'http://eaf-demo.eafservice.evergrande.com', // 使用代理，不需要这只该项
  // baseURL: 'http://developer.eafservice.evergrande.com',
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
    console.log(error)
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

const fetch = ({
  method = 'POST',
  url,
  data,
  params,
  success = null,
  fail = null
}) => {
  let fetchParam = {
    url,
    method
  }
  console.log(params)
  if (data) {
    fetchParam['data'] = data
  } else if (params) {
    fetchParam['params'] = params
  }
  if (method === 'PUT') {
    params = qs.stringify(params)
    fetchParam = {
      url,
      method,
      data: params
    }
  }
  console.log(fetchParam)
  service(fetchParam).then(res => {
    if (res.success) {
      success(res.data)
    } else {
      if (fail) {
        fail(res)
      } else {
        MessageBox.alert(res.message, '服务器错误', {
          type: 'error'
        })
      }
    }
  }).catch(error => {
    MessageBox.alert(error, '服务器异常', {
      type: 'error'
    })
  })
}

export default fetch
