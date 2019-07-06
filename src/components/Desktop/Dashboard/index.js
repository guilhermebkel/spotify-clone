import React, { Component } from 'react'

import Navbar from '../Navbar/index'
import Library from '../Library/index'

import './style.css'

class Dashboard extends Component{
    constructor(props){
        super(props)
        this.state = {
        }
    }

    render(){
        return (
            <>
                <div id="dashboard" style={{width: "100%", backgroundColor: "#1E1E1E", height: "87vh"}}>
                    <Navbar />    
                    <Library />
                </div>
            </>
        )
    }
}

export default Dashboard