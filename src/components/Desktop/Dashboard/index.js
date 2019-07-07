import React, { Component } from 'react'

import Navbar from '../Navbar/index'
import List from '../List/index'

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
                    <List />
                </div>
            </>
        )
    }
}

export default Dashboard