import { TOKEN } from '../config/env'

export const INITIAL_STATE = {
    volume: 80,
    device: '',
    token: TOKEN || '',
    name: '',
    followers: 0,
    avatar_url: '',
    playlists: [],
    tracks: [],
    profile_selector: 'overview',
    profile_playlists: 5,
    selector: 'songs',
    type: 'library',
    isPlaying: false,
    isMuted: false,
    song: {
        info: [],
        cover_url: '',
        artist: '',
        name: '',
        duration_ms: 0,
    },
    playlist: {
        info: [],
        cover_url: '',
        created_by: '',
        name: '',
        total_songs: 0
    }
}