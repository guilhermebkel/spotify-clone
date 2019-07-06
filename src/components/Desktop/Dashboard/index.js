import React, { Component } from 'react'
import Navbar from '../Navbar/index'

import './style.css'

export default class Dashboard extends Component{
    constructor(props){
        super(props)
        this.state = {
        }
    }

    render(){
        return (
            <>
                <div id="dashboard" style={{width: "100%", backgroundColor: "red", height: "100%"}}>
                    <Navbar />    
                </div>
            </>
        )
    }
}