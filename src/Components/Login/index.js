import React, { Component } from 'react'
import Particles from 'react-particles-js'

import './style.css'
import Spotify from '../../assets/spotify.png'

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

    async login(){
        const API = 'https://spotify-api-server.herokuapp.com/login'
        await fetch(API)
        .then((result) => {
            console.log(result)
        })
    }

    render(){
        return(
            <>
                <div className="container">
                    <img alt="Spotify" src={Spotify} />
                    <button>Login</button>
                </div> 

                <Particles
                    params={{
                        "particles": {
                            "number": {
                                "value": 50
                            },
                            "size": {
                                "value": 3
                            }
                        }
                    }}
                    height="99vh"
                    width="99vw" 
                    className="particles"/>
            </>
        )
    }
}