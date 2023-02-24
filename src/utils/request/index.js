import VAxios from './request'

console.log(import.meta.env.VITE_BASE_URL)
const requestIntance = new VAxios({
  baseURL: import.meta.env.VITE_BASE_URL
})
const request = config => requestIntance.request(config)

export default request
