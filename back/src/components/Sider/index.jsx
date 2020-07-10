import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Layout, Menu } from 'antd'
import routes from '@/config/routes'

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

  const renderMenu = (routes) =>
    routes.map((v) => {
      if (v.children) {
        return (
          <Menu.SubMenu key={v.path} title={v.name}>
            {renderMenu(v.children)}
          </Menu.SubMenu>
        )
      } else {
        return (
          <Menu.Item key={v.path} onClick={() => history.push(v.path)}>
            {v.name}
          </Menu.Item>
        )
      }
    })

  return (
    <Layout.Sider>
      <Menu
        theme='dark'
        mode='inline'
        defaultOpenKeys={['/articles']}
        selectedKeys={[activeMenu]}
      >
        {renderMenu(routes)}
      </Menu>
    </Layout.Sider>
  )
}
