import { useRequest } from 'ahooks'
import http from './request'

export default (request, config) =>
  useRequest(request, {
    requestMethod: (requestConfig) => http(requestConfig),
    ...config,
  })
