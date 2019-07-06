import React, { Component } from 'react'

export default class Desktop extends Component{
    constructor(props){
        super(props)
        this.state = {
            token: props.match.params.token
        }
    }

    render(){
        return (
            <h1>DESKTOP</h1>
        )
    }
}