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
                <div className="dashboard">
                    <Navbar />    
                    <Library />
                </div>
            </>
        )
    }
}

export default Dashboard