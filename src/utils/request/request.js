import axios from 'axios'
import { ElMessage } from 'element-plus'


class VAxios {
  constructor(props) {
    this.axiosInstance = axios.create(props)
  }

  request(config) {
    return new Promise((resolve, reject) => {
      this.axiosInstance.request(config)
        .then(response => resolve(response))
        .catch(error => reject(error))
    })
  }

  private setupIntercepors() {
    this.axiosInstance.interceptors.request.use(
      (config) => {
        config.headers = {
          ...config.headers
          // Authorization: `${userInfoStore.token || ''}`
        }
      },
      (error) => {
        return Promise.reject(error)
      }
    )

    this.axiosInstance.interceptors.response.use(
      (response) => {
        if (response.data.success) {
          return response.data
        } else {
          ElMessage.error(response.data.msg ?? '网络错误，请稍后再试～')
        }
      },
      (error) => {
        return Promise.reject(error)
      }
    )
  }
}

export default new VAxios({
  baseUrl: import.meta.env.VITE_BASE_URL
})