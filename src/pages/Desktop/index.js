import React, { Component } from 'react'

import Sidebar from '../../components/Desktop/Sidebar'
import Dashboard from '../../components/Desktop/Dashboard'
import Player from '../../components/Desktop/Player'

import './style.css'

export default class Desktop extends Component{
    constructor(props){
        super(props)
        this.state = {
            token: props.match.params.token,
            isLoading: true
        }
    }

    render(){
        return (
            <>
                <div style={{display: "grid", gridTemplateColumns: "15vw 85vw", height: "87vh"}}>
                    <Sidebar />
                    <Dashboard />
                </div>
                <div style={{height: "13vh"}}>
                    <Player />
                </div>
            </>
        )
    }
}