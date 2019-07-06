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
                <Sidebar />
                <Dashboard />
                <Player />
            </>
        )
    }
}