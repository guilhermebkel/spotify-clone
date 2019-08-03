import React, { Component } from 'react'
import { connect } from 'react-redux'

class Library extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }

    play = () => {
        const data = {
            isPlaying: true,
            song: {
                info: this.props.state.tracks[0],
                cover_url: this.props.state.tracks[0].track.album.images[this.props.state.tracks[0].track.album.images.length-1].url,
                artist: [...this.props.state.tracks[0].track.artists.map(artist => artist.name).join(', ')],
                name: this.props.state.tracks[0].track.name,
                duration_ms: this.props.state.tracks[0].track.duration_ms,
                url: this.props.state.tracks[0].track.external_urls.spotify
            }
        }
        const playSong = (data) => ({ type: 'PLAY_SONG', data })
        this.props.dispatch(playSong(data))
    }

    render(){
        return(
            <div className="library">
                <h1 className="title">Songs</h1>
                <button className="play-button" onClick={this.play}>PLAY</button>
            </div>
        )
    }
}

export default connect(state => ({ state }))(Library)