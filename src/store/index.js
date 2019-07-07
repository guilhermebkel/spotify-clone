import { createStore } from 'redux'

const INITIAL_STATE = {
    name: '',
    avatar_url: '',
    playlists: [],
    tracks: [],
    selector: 'songs',
    isPlaying: false,
    song: {
        info: [],
        cover_url: '',
        artist: '',
        name: '',
    }
}

function reducer(state = INITIAL_STATE, action){
    if(action.type === 'GET_INITIAL_DATA'){
        console.log(action)
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
            }
        }
    }
    return state 
}

const store = createStore(reducer)

export default store