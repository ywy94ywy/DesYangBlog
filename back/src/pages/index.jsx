import React, { lazy, Suspense } from 'react'
import ReactDom from 'react-dom'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import { Layout, Spin } from 'antd'
import Sider from 'components/Sider'
import Content from 'components/Content'
import routes from '@/config/routes'

const APP = () => {
  return (
    <Router>
      <Layout>
        <Sider />
        <Switch>
          <Content>
            {renderRouters(routes).map((v) => {
              const Component = lazy(() => import(`${v.component}`))
              return (
                <Route path={v.path} key={v.path}>
                  <Suspense fallback={<Spin />}>
                    <Component />
                  </Suspense>
                </Route>
              )
            })}
          </Content>
        </Switch>
      </Layout>
    </Router>
  )
}

const renderRouters = (routes) => {
  const arr = []
  const recursion = (routes) => {
    routes.forEach((v) => {
      if (v.children) {
        recursion(v.children)
      } else {
        if (v.component) {
          arr.push(v)
        }
      }
    })
  }
  recursion(routes)
  return arr
}

ReactDom.render(<APP />, document.getElementById('root'))
