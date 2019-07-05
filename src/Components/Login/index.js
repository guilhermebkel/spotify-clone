import React, { Component } from 'react'
import Particles from 'react-particles-js'

import './style.css'

export default class Login extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    componentDidMount(){
        this.connectServer()
    }

    async connectServer(){
        const API = 'https://spotify-api-server.herokuapp.com/'
        await fetch(API)
        .then((result) => {
            console.log(result)
        })
    }

    render(){
        return(
            <Particles
            params={{
                "particles": {
                    "number": {
                        "value": 50
                    },
                    "size": {
                        "value": 3
                    }
                },
                "interactivity": {
                    "events": {
                        "onhover": {
                            "enable": true,
                            "mode": "repulse"
                        }
                    }
                }
            }} />
        )
    }
}