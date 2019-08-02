import React, { Component } from 'react'
import { connect } from 'react-redux'
import { MdPlayCircleOutline, MdPauseCircleOutline, MdSkipNext, MdSkipPrevious } from "react-icons/md";

import '../style.css'

class Buttons extends Component{
    constructor(props){
        super(props)
        this.state = {}
    }

    play = () => {
        const playSong = () => ({ type: 'PLAY' })
        this.props.dispatch(playSong())
    }
    pause = () => {
        const playSong = () => ({ type: 'PAUSE' })
        this.props.dispatch(playSong())
    }
    changeSong = (type) => {
        let nextSong = [] 
        for(let i=0; i<this.props.state.tracks.length; i++){
            if(this.props.state.tracks[i].track.name === this.props.state.song.name){
                nextSong.push(this.props.state.tracks[type === 'next' ? ++i : --i].track)
                break
            }
        }
        const data = {
            song: {
                info: nextSong[0],
                cover_url: nextSong[0].album.images[this.props.state.tracks[0].track.album.images.length-1].url,
                artist: [...nextSong[0].artists.map(artist => artist.name).join(', ')],
                name: nextSong[0].name,
                duration_ms: nextSong[0].duration_ms
            }
        }
        const playSong = (data) => ({ type: 'PLAY_SONG', data })
        this.props.dispatch(playSong(data))
    }

    render(){
        return(
            <section className="buttons">
                <MdSkipPrevious className="next-previous" onClick={() => this.changeSong('previous')} />
                {
                    this.props.state.isPlaying 
                    ? <MdPauseCircleOutline className="play-pause" onClick={this.pause} /> 
                    : <MdPlayCircleOutline className="play-pause" onClick={this.play} />
                }
                <MdSkipNext className="next-previous" onClick={() => this.changeSong('next')} />
            </section>
        )
    }
}

export default connect(state => ({ state }))(Buttons)