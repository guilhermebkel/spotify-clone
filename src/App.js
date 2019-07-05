import React from 'react';
const { auth } = require('./api/middlewares/auth')

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {}
  }
  componentDidMount(){
    auth()
  }

  render(){
    return(
      <>
      </>
    )
  }
}

export default App;