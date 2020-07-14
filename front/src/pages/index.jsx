import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Nav from 'components/Nav'
import Header from 'components/Header'
import Content from 'components/Content'
import Container from 'components/Container'
import Home from './Home'
import Article from './Article'
import './global.scss'

const App = () => {
  return (
    <Router>
      <Nav />
      <Header />
      <Content>
        <Container>
          <Switch>
            <Route path='/' exact>
              <Home />
            </Route>
            <Route path='/article'>
              <Article />
            </Route>
          </Switch>
        </Container>
      </Content>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
