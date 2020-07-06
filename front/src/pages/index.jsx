import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import App from './App'
import Doc from './Doc'

const APP = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' exact>
          <App />
        </Route>
        <Route path='/article'>
          <Doc />
        </Route>
      </Switch>
    </Router>
  )
}
ReactDom.render(<APP />, document.getElementById('root'))
