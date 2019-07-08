import React, { Component } from 'react'

export default class Mobile extends Component{
    constructor(props){
        super(props)
        this.state = {
            token: props.match.params.token
        }
    }

    render(){
        return (
            <div />
        )
    }
}