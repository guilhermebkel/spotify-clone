import React from 'react'
import { BrowserRouter, Route } from "react-router-dom";

import Login from './Components/Login'

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {}
  }

  render(){
    return(
      <BrowserRouter>
        <Route exact path="" component={Login} />
      </BrowserRouter>
    )
  }
}

export default App;