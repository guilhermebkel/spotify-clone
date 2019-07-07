import React from 'react'
import { connect } from 'react-redux'

const Library = ({ state }) => (
    <div className="library">
        <h1 className="title">Songs</h1>
        <button className="play-button">PLAY</button>
    </div>
)

export default connect(state => ({ state }))(Library)