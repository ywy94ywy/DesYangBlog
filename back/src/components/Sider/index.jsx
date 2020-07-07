import React from 'react'
import { withRouter } from 'react-router-dom'
import { Layout, Menu } from 'antd'

export default withRouter(({ location, history }) => {
  return (
    <Layout.Sider>
      <Menu theme='dark' mode='inline' defaultOpenKeys={['/articles']}>
        <Menu.SubMenu key='/articles' title='文章管理'>
          <Menu.Item
            key='/articles/list'
            onClick={() => history.push('/articles/list')}
          >
            文章列表
          </Menu.Item>
          <Menu.Item
            key='/articles/edit'
            onClick={() => history.push('/articles/edit')}
          >
            添加文章
          </Menu.Item>
        </Menu.SubMenu>

        <Menu.Item key='/a' onClick={() => history.push('/a')}>
          a
        </Menu.Item>
        <Menu.Item key='/b' onClick={() => history.push('/b')}>
          b
        </Menu.Item>
      </Menu>
    </Layout.Sider>
  )
})
