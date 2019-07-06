import React, { Component } from 'react'
import { Cascader } from 'antd'
import { connect } from 'react-redux'

import './style.css'
import 'antd/dist/antd.css'

import DownArrow from '../../../assets/icons/down-arrow.png'

const options = [
    {
      value: 'account',
      label: 'Account',
    },
    {
      value: 'logout',
      label: 'Log out',
    },
];

class Navbar extends Component{
    constructor(props){
        super(props)
        this.state = {
            isOpen: false
        }
    }

    logout(){
        window.open("https://www.spotify.com/logout/", "_self")
    }

    handleOption = (value) => {
        const [ option ] = value
        if(option === 'logout'){
            this.logout()
        }
    };

    render(){
        return (
            <div className="navbar">
                <img className="avatar" alt="avatar" src={this.props.state.avatar_url} />
                <h1 className="name">{this.props.state.name}</h1>
                <Cascader 
                options={options} 
                onChange={this.handleOption} 
                popupClassName="cascade">
                    <img alt="config" src={DownArrow} className="arrow-down" />
                </Cascader>
            </div>
        )
    }
}

export default connect(state => ({ state }))(Navbar)