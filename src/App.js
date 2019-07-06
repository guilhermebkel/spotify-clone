import React from 'react'
import { Switch, Route } from "react-router-dom";

import Login from './pages/Login'
import Desktop from './pages/Desktop'
import Mobile from './pages/Mobile'

import { Provider } from 'react-redux'
import store from './store'

import { LOGIN_URL, DESKTOP_URL, MOBILE_URL } from './config/env'

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {}
  }

  render(){
    return(
      <Switch>
        <Provider store={store}>
          <Route path={DESKTOP_URL} component={Desktop} />
          <Route path={MOBILE_URL} component={Mobile} />
          <Route exact path={LOGIN_URL} component={Login} />
        </Provider>
      </Switch>
    )
  }
}

export default App;