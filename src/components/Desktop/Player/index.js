import React, { Component } from 'react'
import { connect } from 'react-redux'
import { MdVolumeUp, MdVolumeOff } from "react-icons/md"
import { Slider } from 'antd'

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

    refreshState = async (changeSong = false) => {
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
            if (this.state.currentTimeMilliseconds > this.props.state.song.duration_ms) this.changeSong('next')
            if (!this.props.state.isPlaying) this.pause(playing)
        }, 1000)
    }

    pause(state){
        clearInterval(state)
    }

    changeSong = async (type) => {
        let nextSong = [] 
        for(let i=0; i<this.props.state.tracks.length; i++){
            if(this.props.state.tracks[i].track.name === this.props.state.song.name){
                if(i === this.props.state.tracks.length-1){
                    nextSong.push(this.props.state.tracks[type === 'next' ? 0 : --i].track) 
                    break
                }
                else if(i === 0){
                    nextSong.push(this.props.state.tracks[type === 'previous' ? this.props.state.tracks.length-1 : ++i].track)
                    break
                }
                else{
                    nextSong.push(this.props.state.tracks[type === 'next' ? ++i : --i].track)
                    break
                }
            }
        }
        const data = {
            song: {
                info: nextSong[0],
                cover_url: nextSong[0].album.images[this.props.state.tracks[0].track.album.images.length-1].url,
                artist: [...nextSong[0].artists.map(artist => artist.name).join(', ')],
                name: nextSong[0].name,
                duration_ms: nextSong[0].duration_ms,
                url: nextSong[0].external_urls.spotify
            }
        }
        const playSong = (data) => ({ type: 'PLAY_SONG', data })
        await this.props.dispatch(playSong(data))
        this.refreshState(true)
    }

    handleChangeVolume = (volume) => {
        const data = { volume }
        const changeVolume = (data) => ({ type: 'CHANGE_VOLUME', data })
        this.props.dispatch(changeVolume(data))
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
                    <Buttons refreshState={this.refreshState} changeSong={this.changeSong} />
                    <ProgressBar {...this.state} />
                </section>
                <section className="song-volume">
                    {
                        this.props.state.isMuted
                        ? <MdVolumeOff className="muted-desmuted" onClick={this.desmute} />
                        : <MdVolumeUp className="muted-desmuted" onClick={this.mute} />
                    }
                    <Slider 
                        value={this.props.state.isMuted ? 0 : this.props.state.volume}
                        onChange={volume => this.handleChangeVolume(volume)}
                        step={1}
                        tooltipVisible={false}
                    />
                </section>
            </div>
        )
    }
}

export default connect(state => ({ state }))(Player)