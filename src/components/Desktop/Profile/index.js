import React, { Component } from 'react'
import { connect } from 'react-redux'

import './style.css'

import Album from './components/Album'

class Profile extends Component{
    constructor(props){
        super(props)
        this.state = {}
    }

    profileSelector = (profile_selector) => {
        const data = {
            profile_selector,
            profile_playlists: profile_selector === 'public-playlists' ? 20 : 5
        }
        const changeProfileSelector = (data) => ({ type: 'CHANGE_PROFILE_SELECTOR', data })
        this.props.dispatch(changeProfileSelector(data))
    }

    render(){
        return(
            <>
                <div className="profile">
                    <img alt="cover" className="cover" src={this.props.state.avatar_url} />
                    <section className="user-info">
                        <h2 className="subtitle">USER</h2>
                        <h1 className="title">{this.props.state.name}</h1>
                    </section>
                </div>
                <li className="profile-options">
                    <ul onClick={() => this.profileSelector('overview')}
                    className={this.props.state.profile_selector === 'overview' ? "selected" : ''}>OVERVIEW</ul>
                    <ul onClick={() => this.profileSelector('public-playlists')}
                    className={this.props.state.profile_selector === 'public-playlists' ? "selected" : ''}>PUBLIC PLAYLISTS</ul>
                    <ul>FOLLOWING</ul>
                    <ul>FOLLOWERS({this.props.state.followers})</ul>
                </li>
                {
                    this.props.state.profile_selector === 'overview' 
                    ? <li className="description">
                        <ul className="public-playlists">Public Playlists</ul>
                        <ul onClick={() => this.profileSelector('public-playlists')} 
                        className="see-all">SEE ALL</ul>
                    </li>
                    : <div />
                }
                
                <section className="playlists">
                    {
                        this.props.state.playlists.slice(0, this.props.state.profile_playlists).map(playlist => <Album {...playlist}/>)
                    }
                </section>
            </>
        )
    }
}

export default connect(state => ({ state }))(Profile)