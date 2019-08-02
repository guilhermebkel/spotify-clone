import React, { Component } from 'react'
import { connect } from 'react-redux'
import { MdVolumeUp, MdVolumeOff } from "react-icons/md"

import Buttons from './widgets/Buttons'
import ProgressBar from './widgets/ProgressBar'

import './style.css'

class Player extends Component{
    constructor(props){
        super(props)
        this.state = {
        }
    }

    mute = () => {
        const mute = () => ({ type: 'MUTE' })
        this.props.dispatch(mute())
    }
    desmute = () => {
        const desmute = () => ({ type: 'DESMUTE' })
        this.props.dispatch(desmute())
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
                    <Buttons />
                    <ProgressBar />
                </section>
                <section className="song-volume">
                    {
                        this.props.state.isMuted
                        ? <MdVolumeOff className="muted-desmuted" onClick={this.desmute} />
                        : <MdVolumeUp className="muted-desmuted" onClick={this.mute} />
                    }
                    <section className="progress-bar-container">
                        <div className="progress-bar">
                            <div style={{width: `${this.props.state.isMuted ? 0 : this.props.state.volume}%`}}></div>
                        </div>
                    </section>
                </section>
            </div>
        )
    }
}

export default connect(state => ({ state }))(Player)