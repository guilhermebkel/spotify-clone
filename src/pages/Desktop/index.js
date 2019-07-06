import React, { Component } from 'react'
import { connect } from 'react-redux'

import Sidebar from '../../components/Desktop/Sidebar'
import Dashboard from '../../components/Desktop/Dashboard'
import Player from '../../components/Desktop/Player'

import { getUserData, getUserPlaylists, getUserTracks } from '../../services/spotify'

import './style.css'

class Desktop extends Component{
    constructor(props){
        super(props)
        this.state = {
            token: props.match.params.token,
        }
    }
    
    async componentDidMount(){
        const userData = await getUserData(this.state.token)
        const userPlaylists = await getUserPlaylists(this.state.token)
        const userTracks = await getUserTracks(this.state.token)

        const data = {
            name: userData.display_name,
            avatar_url: userData.images[0].url,
            playlists: userPlaylists.items,
            tracks: userTracks.items
        }

        function changeState(data){
            return {
                type: 'GET_INITIAL_DATA',
                data
            }
        }

        this.props.dispatch(changeState(data))
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

export default connect(state => ({ state }))(Desktop)