import axios from 'axios'
import { ElMessage } from 'element-plus'

class VAxios {
  axiosInstance
  constructor(props) {
    this.axiosInstance = axios.create(props)
    this.setupInterceptors()
  }

  request(config) {
    return new Promise((resolve, reject) => {
      this.axiosInstance
        .request(config)
        .then(response => resolve(response))
        .catch(error => reject(error))
    })
  }

  setupInterceptors() {
    this.axiosInstance.interceptors.request.use(
      config => {
        config.headers = {
          ...config.headers
          // Authorization: `${userInfoStore.token || ''}`
        }
        return config
      },
      error => {
        return Promise.reject(error)
      }
    )

    this.axiosInstance.interceptors.response.use(
      response => {
        if (response.data.success) {
          return response.data
        } else {
          ElMessage.error(response.data.msg ?? '网络错误，请稍后再试～')
        }
      },
      error => {
        return Promise.reject(error)
      }
    )
  }
}

export default VAxios
