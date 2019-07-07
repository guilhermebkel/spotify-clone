import React, { Component } from 'react'
import { connect } from 'react-redux'
import Particles from 'react-particles-js'
import queryString from 'query-string'

import { SERVER_URL } from '../../config/env'

import './style.css'
import Spotify from '../../assets/spotify.png'

class Login extends Component{
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
        const values = queryString.parse(this.props.location.search)
        if(this.props.location.search){
            const saveInfo = (data) => ({ type: 'SAVE_INFO', data })
            await this.props.dispatch(saveInfo(values))
            this.props.history.push(this.props.state.device, '');
        }
        
        const server_url = SERVER_URL
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
        this.setState({
            buttonClass: "button-connect", 
            buttonText: "Logging in...",
            loading: {animation: "connecting 2s infinite", pointerEvents: "none"}
        })
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

export default connect(state => ({ state }))(Login)