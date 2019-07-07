import React from 'react'
import { connect } from 'react-redux'

const Playlist = ({ state }) => (
    <div className="playlist">
        <img alt="cover" className="cover" src={state.playlist.cover_url} />
        <section className="playlist-info">
            <h2 className="subtitle">PLAYLIST</h2>
            <h1 className="title">{state.playlist.name}</h1>
            <h3 className="author">Created by <strong>{state.playlist.created_by}</strong> • {state.playlist.total_songs} songs</h3>
            <button className="play-button">PLAY</button>
        </section>
    </div>
)

export default connect(state => ({ state }))(Playlist)