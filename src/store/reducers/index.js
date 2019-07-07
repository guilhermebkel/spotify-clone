import { INITIAL_STATE } from '../default'
// import actions from './actions/index'

export default function reducer(state = INITIAL_STATE, action){
    switch(action.type){

        case('GET_INITIAL_DATA'):
            return {
                ...state, 
                token: action.data.token,
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

        case('PLAY_SONG'):
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

        case('CHANGE_LIBRARY'):
            return {
                ...state,
                tracks: action.data.tracks,
                selector: action.data.selector,
                type: action.data.type
            }

        case('CHANGE_PLAYLIST'):
            return {
                ...state,
                tracks: action.data.tracks,
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

        case('GET_PROFILE'):
            return {
                ...state,
                selector: action.data.selectior,
                type: action.data.type
            }
        
        case('SAVE_INFO'):
        return {
            ...state,
            device: action.data.device,
            token: action.data.access_token
        }
            
        default:
            return state
    }
}