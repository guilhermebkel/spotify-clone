import React, { Component } from 'react'
import { connect } from 'react-redux'

class Playlist extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    profile = () => {

        const data = {
            selector: '',
            type: 'profile'
        }
    
        const getProfile = (data) => ({ type: 'GET_PROFILE', data })
        this.props.dispatch(getProfile(data))
    }

    play = () => {
        const data = {
            isPlaying: true,
            song: {
                info: this.props.state.tracks[0],
                cover_url: this.props.state.tracks[0].track.album.images[this.props.state.tracks[0].track.album.images.length-1].url,
                artist: [...this.props.state.tracks[0].track.artists.map(artist => artist.name).join(', ')],
                name: this.props.state.tracks[0].track.name,
            }
        }
        const playSong = (data) => ({ type: 'PLAY_SONG', data })
        this.props.dispatch(playSong(data))
    }

    render(){
        return(
            <div className="playlist">
                <img alt="cover" className="cover" src={this.props.state.playlist.cover_url} />
                <section className="playlist-info">
                    <h2 className="subtitle">PLAYLIST</h2>
                    <h1 className="title">{this.props.state.playlist.name}</h1>
                    <h3 className="author">Created by <strong onClick={() => this.profile()}>{this.props.state.playlist.created_by}</strong> • {this.props.state.playlist.total_songs} songs</h3>
                    <button className="play-button" onClick={this.play}>PLAY</button>
                </section>
            </div>
        )
    }
}

export default connect(state => ({ state }))(Playlist)