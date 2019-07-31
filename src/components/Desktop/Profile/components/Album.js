import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getUserPlaylistSongs }  from '../../../../services/spotify'
class Album extends Component{
    constructor(props){
        super(props)
        this.state = {}
    }

    playlist = async (selector, playlist) => {
        const tracks = await getUserPlaylistSongs(this.props.state.token, playlist.id)
        const data = {
            selector,
            type: 'playlist',
            tracks: tracks.items,
            playlist: {
                info: playlist,
                cover_url: playlist.images[0].url,
                created_by: playlist.owner.display_name,
                name: playlist.name,
                total_songs: playlist.tracks.total
            }
        }
        const changePlaylist = (data) => ({ type: 'CHANGE_PLAYLIST', data })
        this.props.dispatch(changePlaylist(data))
    }

    render(){
        return(
            <div className="album">
                <img alt="album" src={this.props.images[0].url} onClick={() => this.playlist(this.props.name, this.props)}/>
                <h1 onClick={() => this.playlist(this.props.name, this.props)}>{this.props.name}</h1>
            </div>
        )
    }
}

export default connect(state => ({ state }))(Album)