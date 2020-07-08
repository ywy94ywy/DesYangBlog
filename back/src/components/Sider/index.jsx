import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Layout, Menu } from 'antd'

export default () => {
  const history = useHistory()
  const {
    location: { pathname },
  } = history
  const [activeMenu, setActiveMenu] = useState(pathname)

  useEffect(() => {
    history.listen(({ pathname }) => {
      setActiveMenu(pathname)
    })
  }, [])

  return (
    <Layout.Sider>
      <Menu
        theme='dark'
        mode='inline'
        defaultOpenKeys={['/articles']}
        selectedKeys={[activeMenu]}
      >
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
            文章编辑
          </Menu.Item>
        </Menu.SubMenu>

        <Menu.Item key='/tags' onClick={() => history.push('/tags')}>
          标签管理
        </Menu.Item>
        <Menu.Item key='/b' onClick={() => history.push('/b')}>
          b
        </Menu.Item>
      </Menu>
    </Layout.Sider>
  )
}
