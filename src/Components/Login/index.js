import React, { Component } from 'react'
import Particles from 'react-particles-js'
import { ONLINE_SERVER, LOCAL_SERVER } from '../../config/env'

import './style.css'
import Spotify from '../../assets/spotify.png'

export default class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            server_url: "",
            buttonClass: "button",
            buttonText: "Login",
            loading: {}
        }
        this.login = this.login.bind(this)
        this.connectServer = this.connectServer.bind(this)
    }

    async componentDidMount(){
        const server_url = process.env.NODE_ENV === 'development' ? LOCAL_SERVER : ONLINE_SERVER
        this.setState({
            server_url,
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
        const API = this.state.server_url
        await fetch(API)
        .then((result) => {
            console.log(result.status) 
        })
    }

    async login(){
        const API = this.state.server_url + 'login' 
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