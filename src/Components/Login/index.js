import React, { Component } from 'react'
import Particles from 'react-particles-js'

import './style.css'
import Spotify from '../../assets/spotify.png'

export default class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            buttonClass: "button",
            buttonText: "Login",
            loading: {}
        }
    }

    async componentDidMount(){
        this.setState({
            buttonClass: "button-loading", 
            buttonText: "Connecting to server...",
            loading: {animation: "loading 2s infinite", pointerEvents: "none"}
        })
        await this.connectServer()
        this.setState({
            buttonClass: "button", 
            buttonText: "Login", 
            loading: {}
        })
    }

    async connectServer(){
        const API = process.env.SERVER_URL || 'http://localhost:5000/'
        await fetch(API)
        .then((result) => {
            console.log(result.status) 
        })
    }

    async login(){
        const API = process.env.SERVER_URL ? process.env.SERVER_URL + 'login' : 'http://localhost:5000/login'
        window.open(API,"_self");
    }

    render(){
        return(
            <>
                <div className="container">
                    <img alt="Spotify" src={Spotify} />
                    <button onClick={this.login} style={this.state.loading} 
                    className={this.state.buttonClass}>{this.state.buttonText}</button>
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