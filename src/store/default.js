export const INITIAL_STATE = {
    device: '',
    token: '',
    name: '',
    followers: 0,
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