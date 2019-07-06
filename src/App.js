import React from 'react'
import { Switch, Route } from "react-router-dom";

import Login from './pages/Login'
import Desktop from './pages/Desktop'
import Mobile from './pages/Mobile'

import { Provider } from 'react-redux'
import store from './store'

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {}
  }

  render(){
    return(
      <Switch>
        <Provider store={store}>
          <Route path="/desktop/:token" component={Desktop} />
          <Route path="/mobile/:token" component={Mobile} />
          <Route exact path="" component={Login} />
        </Provider>
      </Switch>
    )
  }
}

export default App;