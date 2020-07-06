import axios from 'axios'

const Axios = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 1000,
})

Axios.interceptors.request.use((config) => {
  // console.log(config)
  return config
})

Axios.interceptors.response.use((res) => {
  return res.data
})

export default Axios
