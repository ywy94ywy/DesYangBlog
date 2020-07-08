import axios from 'axios'

const Axios = axios.create({
  baseURL: 'http://localhost:3000',
  // timeout: 1000,
})

Axios.interceptors.request.use((config) => {
  // console.log(config)
  return config
})

Axios.interceptors.response.use((res) => {
  const { data } = res
  const { status } = data
  if (status === 200) {
    return Promise.resolve(data.data)
  } else {
    return Promise.reject(data)
  }
})

export default Axios
