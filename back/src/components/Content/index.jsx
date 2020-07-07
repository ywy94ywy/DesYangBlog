import React from 'react'
import { Layout, PageHeader } from 'antd'

const routes = [
  {
    path: 'index',
    breadcrumbName: 'First-level Menu',
  },
  {
    path: 'first',
    breadcrumbName: 'Second-level Menu',
  },
  {
    path: 'second',
    breadcrumbName: 'Third-level Menu',
  },
]

export default ({ children }) => {
  return (
    <Layout.Content>
      <PageHeader
        title='Title'
        subTitle='This is a subtitle'
        // breadcrumb={{ routes }}
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
