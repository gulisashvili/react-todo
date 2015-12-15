import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route } from 'react-router'
import App from './components/App'
import Tasks from './components/Tasks'
import Auth from './components/Auth'
import { parseInit } from './parse-helper/app'

window.React = React;

parseInit()

ReactDOM.render(
  <Router>
    <Route path="/" component={App}>
      <Route path="/tasks" component={Tasks} />
      <Route path="/auth" component={Auth} />
    </Route>
  </Router>
  , document.getElementById('content')
);
