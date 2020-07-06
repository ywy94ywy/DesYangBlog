import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Article from './Article'

const APP = () => {
  return (
    <Router>
      <Switch>
        <Route path='/'>
          <Article />
        </Route>
      </Switch>
    </Router>
  )
}
ReactDom.render(<APP />, document.getElementById('root'))
