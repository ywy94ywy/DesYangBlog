import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Nav from 'components/Nav'
import Header from 'components/Header'
import Content from 'components/Content'
import Container from 'components/Container'
import routes from '@/config/routes'
import './global.scss'

const App = () => {
  return (
    <Router>
      <Nav />
      <Header />
      <Content>
        <Container>
          <Switch>
            {routes.map((v) => {
              const Component = lazy(() => import(`${v.component}`))
              return (
                <Route
                  path={v.path}
                  key={v.path}
                  exact={v.path === '/'}
                >
                  <Suspense fallback={'loading...'}>
                    <Component />
                  </Suspense>
                </Route>
              )
            })}
          </Switch>
        </Container>
      </Content>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
