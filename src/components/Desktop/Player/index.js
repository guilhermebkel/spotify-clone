import React, { Component } from 'react'
import { connect } from 'react-redux'

import './style.css'

class Player extends Component{
    constructor(props){
        super(props)
        this.state = {
        }
    }

    render(){
        return (
            <div className="player">
                <section className="song-info">
                    <img alt="song-cover" className="song-cover" src={this.props.state.song.cover_url}/>
                    <li >
                        <ul className="song-name">{this.props.state.song.name}</ul>
                        <ul className="song-artist">{this.props.state.song.artist}</ul>
                    </li>
                </section>
                <section className="song-player">
                
                </section>
            </div>
        )
    }
}

export default connect(state => ({ state }))(Player)