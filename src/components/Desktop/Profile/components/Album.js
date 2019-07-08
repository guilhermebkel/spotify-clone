import React, { Component } from 'react'
import { connect } from 'react-redux'

class Album extends Component{
    constructor(props){
        super(props)
        this.state = {}
    }

    render(){
        return(
            <div className="album">
                <img alt="album" src={this.props.images[0].url} />
                <h1>{this.props.name}</h1>
            </div>
        )
    }
}

export default connect(state => ({ state }))(Album)