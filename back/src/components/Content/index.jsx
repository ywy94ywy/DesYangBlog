import React from 'react'
import { Layout, PageHeader } from 'antd'
import { useHistory } from 'react-router-dom'
import routes from '@/config/routes'

const titleMapLoop = (routes) => {
  const map = {}
  const loop = (routes) => {
    routes.forEach((v) => {
      if (v.children) {
        loop(v.children)
      } else {
        if (v.component) {
          map[v.path] = v.name
        }
      }
    })
  }
  loop(routes)
  return map
}
const titleMap = titleMapLoop(routes)

export default ({ children }) => {
  const history = useHistory()
  const pathname = history.location.pathname

  return (
    <Layout.Content>
      <PageHeader
        title={titleMap[pathname]}
        style={{
          background: 'white',
        }}
      />
      <div
        style={{
          padding: 24,
          minHeight: 280,
        }}
      >
        {children}
      </div>
    </Layout.Content>
  )
}
