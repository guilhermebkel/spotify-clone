import { createStore } from 'redux'

const INITIAL_STATE = {
    name: '',
    avatar_url: '',
    playlists: [],
    tracks: [],
    library_selector: 'Songs'
}

function reducer(state = INITIAL_STATE, action){
    if(action.type === 'GET_INITIAL_DATA'){
        return {
            ...state, 
            name: action.data.name, 
            avatar_url: action.data.avatar_url, 
            playlists: action.data.playlists, 
            tracks: action.data.tracks
        }
    }
    return state 
}

const store = createStore(reducer)

export default store