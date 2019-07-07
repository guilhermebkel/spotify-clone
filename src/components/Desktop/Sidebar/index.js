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
            <ul id="made-for-you">Made for you</ul>
            <ul id="recently-played">Recently played</ul>
            <ul id="songs">Songs</ul>
            <ul id="albums">Albums</ul>
            <ul id="artists">Artists</ul>
        </li>
        <h1 className="playlist-title">PLAYLISTS</h1>
        {state.playlists.map(playlist => <ul key={playlist.name} id={playlist.name} className="playlist-name">{playlist.name}</ul>)}
    </div>
)

export default connect(state => ({ state }))(Sidebar)