import React from 'react'
import { Switch, Route } from "react-router-dom";

import Login from './pages/Login'
import Desktop from './pages/Desktop'
import Mobile from './pages/Mobile'

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {}
  }

  render(){
    return(
      <Switch>
        <Route path="/desktop" component={Desktop} />
        <Route path="/mobile" component={Mobile} />
        <Route exact path="" component={Login} />
      </Switch>
    )
  }
}

export default App;