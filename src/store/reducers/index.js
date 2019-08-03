import { INITIAL_STATE } from '../default'
// import actions from './actions/index'

export default function reducer(state = INITIAL_STATE, action){
    switch(action.type){

        case('GET_INITIAL_DATA'):
            return {
                ...state, 
                followers: action.data.followers,
                name: action.data.name, 
                avatar_url: action.data.avatar_url, 
                playlists: action.data.playlists, 
                tracks: action.data.tracks,
                song: {
                    info: action.data.song,
                    cover_url: action.data.song.track.album.images[action.data.song.track.album.images.length-1].url,
                    artist: [...action.data.song.track.artists.map(artist => artist.name).join(', ')],
                    name: action.data.song.track.name,
                    duration_ms: action.data.song.track.duration_ms,
                    url: action.data.song.track.external_urls.spotify
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
                isPlaying: action.data.isPlaying || state.isPlaying,
                song: {
                    info: action.data.song.info,
                    cover_url: action.data.song.cover_url,
                    artist: action.data.song.artist,
                    name: action.data.song.name,
                    duration_ms: action.data.song.duration_ms,
                    url: action.data.song.url
                },
            }

        case('PLAY'):
            return {
                ...state,
                isPlaying: true,
            }
        
        case('PAUSE'):
            return {
                ...state,
                isPlaying: false,
            }

        case('MUTE'):
            return {
                ...state,
                isMuted: true,
            }

        case('DESMUTE'):
            return {
                ...state,
                isMuted: false,
            }

        case('CHANGE_VOLUME'):
            return {
                ...state,
                volume: action.data.volume,
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
        
        case('CHANGE_PROFILE_SELECTOR'):
            return {
                ...state,
                profile_selector: action.data.profile_selector,
                profile_playlists: action.data.profile_playlists
            }
            
        default:
            return state
    }
}