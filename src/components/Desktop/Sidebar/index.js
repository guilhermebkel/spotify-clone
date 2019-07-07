import React from 'react'
import { connect } from 'react-redux'

import './style.css'
import Home from '../../../assets/icons/home-black-shape.png'

const Sidebar = ({ state }) => (
    <div className="sidebar">
        <div key="home" id={state.selector === 'home' ? 'selected' : ''} className="selector">
            <img alt="home" src={Home} />
            <h1>Home</h1>
        </div>
        <h1 className="library-title">YOUR LIBRARY</h1>
        <li className="library-list">
            <ul key="made-for-you" id={state.selector === 'made-for-you' ? 'selected' : ''}>Made for you</ul>
            <ul key="recently-played" id={state.selector === 'recently-played' ? 'selected' : ''}>Recently played</ul>
            <ul key="songs" id={state.selector === 'songs' ? 'selected' : ''}>Songs</ul>
            <ul key="albums" id={state.selector === 'albums' ? 'selected' : ''}>Albums</ul>
            <ul key="artists" id={state.selector === 'artists' ? 'selected' : ''}>Artists</ul>
        </li>
        <h1 className="playlist-title">PLAYLISTS</h1>
            {state.playlists.map(playlist => 
                <ul key={playlist.name} id={state.selector === playlist.nome ? 'selected' : ''} className="playlist-name">
                    {playlist.name}
                </ul>
            )}
    </div>
)

export default connect(state => ({ state }))(Sidebar)