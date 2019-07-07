import React, { Component } from 'react'
import { connect } from 'react-redux'

import Navbar from '../Navbar/index'
import List from '../List/index'
import Profile from '../Profile/index'

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
                    {
                        this.props.state.type === 'profile'
                        ? <Profile />
                        : <List />
                    }   
                </div>
            </>
        )
    }
}

export default connect(state => ({ state }))(Dashboard)