import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import SubmissionsIndexContainer from "./SubmissionsIndexContainer"

export const App = (props) => {
  return (
    <Router>
      <Switch>
        <Route to="/" component={SubmissionsIndexContainer} />
        <Route to="/submissions" />
      </Switch> 
    </Router>
  )
}

export default App;