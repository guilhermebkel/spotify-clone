import React from 'react'
import { connect } from 'react-redux'

import './style.css'
import Home from '../../../assets/icons/home-black-shape.png'

const Sidebar = ({ state }) => (
    <div className="sidebar">
        <div className="selector">
            <img alt="home" src={Home} />
            <h1>Home</h1>
        </div>
        <h1 className="library-title">YOUR LIBRARY</h1>
        <li className="library-list">
            <ul>Made for you</ul>
            <ul>Recently played</ul>
            <ul id="selected">Songs</ul>
            <ul>Albums</ul>
            <ul>Artists</ul>
        </li>
        <h1 className="playlist-title">PLAYLISTS</h1>
        {state.playlists.map(playlist => <ul key={playlist.id} className="playlist-name">{playlist.name}</ul>)}
    </div>
)

export default connect(state => ({ state }))(Sidebar)