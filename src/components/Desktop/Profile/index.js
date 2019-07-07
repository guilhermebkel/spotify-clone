import React from 'react'
import { connect } from 'react-redux'

import './style.css'

const Profile = ({ state }) => (
    <>
        <div className="profile">
            <img alt="cover" className="cover" src={state.avatar_url} />
            <section className="user-info">
                <h2 className="subtitle">USER</h2>
                <h1 className="title">{state.name}</h1>
            </section>
        </div>
        <li className="profile-options">
            <ul className="selected">OVERVIEW</ul>
            <ul>PUBLIC PLAYLISTS</ul>
            <ul>FOLLOWING</ul>
            <ul>FOLLOWERS({state.followers})</ul>
        </li>
    </>
)

export default connect(state => ({ state }))(Profile)