import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getUserPlaylistSongs, getUserTracks }  from '../../../services/spotify'

import './style.css'
import Home from '../../../assets/icons/home-black-shape.png'

class Sidebar extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }

    library = async (selector) => {
        const tracks = await getUserTracks(this.props.state.token)
        const data = {
            selector,
            tracks: tracks.items,
            type: 'library'
        }
        const changeLibrary = (data) => ({ type: 'CHANGE_LIBRARY', data })
        this.props.dispatch(changeLibrary(data))
    }

    playlist = async (selector, playlist) => {
        const tracks = await getUserPlaylistSongs(this.props.state.token, playlist.id)
        const data = {
            selector,
            type: 'playlist',
            tracks: tracks.items,
            playlist: {
                info: playlist,
                cover_url: playlist.images[0].url,
                created_by: playlist.owner.display_name,
                name: playlist.name,
                total_songs: playlist.tracks.total
            }
        }
        const changePlaylist = (data) => ({ type: 'CHANGE_PLAYLIST', data })
        this.props.dispatch(changePlaylist(data))
    }

    render(){
        return(
            <div className="sidebar">
                <div onClick={() => this.library('home')}  
                id={this.props.state.selector === 'home' ? 'selected' : ''} className="selector">
                    <img alt="home" src={Home} />
                    <h1>Home</h1>
                </div>
                <h1 className="library-title">YOUR LIBRARY</h1>
                <li className="library-list">
                    <ul onClick={() => this.library('made-for-you')}
                    id={this.props.state.selector === 'made-for-you' ? 'selected' : ''}>Made for you</ul>
                    <ul onClick={() => this.library('recently-played')}  
                    id={this.props.state.selector === 'recently-played' ? 'selected' : ''}>Recently played</ul>
                    <ul onClick={() => this.library('songs')}  
                    id={this.props.state.selector === 'songs' ? 'selected' : ''}>Songs</ul>
                    <ul onClick={() => this.library('albums')}  
                    id={this.props.state.selector === 'albums' ? 'selected' : ''}>Albums</ul>
                    <ul onClick={() => this.library('artists')}   
                    id={this.props.state.selector === 'artists' ? 'selected' : ''}>Artists</ul>
                </li>
                <h1 className="playlist-title">PLAYLISTS</h1>
                {this.props.state.playlists.map(playlist => 
                    <ul key={playlist.name} onClick={() => this.playlist(playlist.name, playlist)}  
                    id={this.props.state.selector === playlist.name ? 'selected' : ''} className="playlist-name">
                        {playlist.name}
                    </ul>
                )}
            </div>
        )
    }
}

export default connect(state => ({ state }))(Sidebar)