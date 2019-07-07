import { createStore } from 'redux'

const INITIAL_STATE = {
    name: '',
    avatar_url: '',
    playlists: [],
    tracks: [],
    selector: 'songs',
    type: 'library',
    isPlaying: false,
    song: {
        info: [],
        cover_url: '',
        artist: '',
        name: '',
    },
    playlist: {
        info: [],
        cover_url: '',
        created_by: '',
        name: '',
        total_songs: 0
    }
}

function reducer(state = INITIAL_STATE, action){
    if(action.type === 'GET_INITIAL_DATA'){
        return {
            ...state, 
            name: action.data.name, 
            avatar_url: action.data.avatar_url, 
            playlists: action.data.playlists, 
            tracks: action.data.tracks,
            song: {
                info: action.data.song,
                cover_url: action.data.song.track.album.images[action.data.song.track.album.images.length-1].url,
                artist: [...action.data.song.track.artists.map(artist => artist.name)],
                name: action.data.song.track.name
            },
            playlist: {
                info: action.data.playlist,
                cover_url: action.data.playlist.images[0].url,
                created_by: action.data.playlist.owner.display_name,
                name: action.data.playlist.name,
                total_songs: action.data.playlist.tracks.total
            }
        }
    }
    else if(action.type === 'PLAY_SONG'){
        return {
            ...state,
            isPlaying: action.data.isPlaying,
            song: {
                info: action.data.song.info,
                cover_url: action.data.song.cover_url,
                artist: action.data.song.artist,
                name: action.data.song.name
            },
        }
    }
    else if(action.type === 'CHANGE_LIBRARY'){
        return {
            ...state,
            selector: action.data.selector,
            type: action.data.type
        }
    }
    else if(action.type === 'CHANGE_PLAYLIST'){
        return {
            ...state,
            selector: action.data.selector,
            type: action.data.type,
            playlist: {
                info: action.data.playlist.info,
                cover_url: action.data.playlist.cover_url,
                created_by: action.data.playlist.created_by,
                name: action.data.playlist.name,
                total_songs: action.data.playlist.total_songs
            }
        }
    }
    return state 
}

const store = createStore(reducer)

export default store