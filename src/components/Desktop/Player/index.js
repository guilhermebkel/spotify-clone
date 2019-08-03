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
            songDuration: 0,
            currentTime: 0,
            currentTimeMilliseconds: 0,
            songState: 0,
        }
    }

    componentDidMount(){
        this.setState({ currentTime: this.millisToMinutesAndSeconds(this.state.currentTimeMilliseconds) })
        this.refreshState()
    }

    mute = () => {
        const mute = () => ({ type: 'MUTE' })
        this.props.dispatch(mute())
    }
    desmute = () => {
        const desmute = () => ({ type: 'DESMUTE' })
        this.props.dispatch(desmute())
    }

    refreshState = (changeSong = false) => {
        this.setState({ songDuration: this.millisToMinutesAndSeconds(this.props.state.song.duration_ms) })

        if(changeSong){
            this.setState({ currentTime: this.millisToMinutesAndSeconds(0), songState: 0, currentTimeMilliseconds: 0 })
        }
        
        if (this.props.state.isPlaying) this.play()
    }

    millisToMinutesAndSeconds(millis) {
        var minutes = Math.floor(millis / 60000);
        var seconds = ((millis % 60000) / 1000).toFixed(0);
        return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
    }

    play(){
        const playing = setInterval(() => {
            this.setState({
                currentTime: this.millisToMinutesAndSeconds(this.state.currentTimeMilliseconds),
                currentTimeMilliseconds: this.state.currentTimeMilliseconds + 1000,
                songState: ((this.state.currentTimeMilliseconds + 1000) / this.props.state.song.duration_ms)*100,
            })
            if (!this.props.state.isPlaying) this.pause(playing)
        }, 1000)
    }

    pause(state){
        clearInterval(state)
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
                    <Buttons refreshState={this.refreshState} />
                    <ProgressBar {...this.state} />
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