const ONLINE_SERVER = 'https://spotify-api-server.herokuapp.com/'
const LOCAL_SERVER = 'http://localhost:5000/'

const ONLINE_LOGIN = '/Fake-Spotify'
const LOCAL_LOGIN = '/'

const ONLINE_DESKTOP = '/Fake-Spotify/desktop/:token'
const LOCAL_DESKTOP = '/desktop/:token'

const ONLINE_MOBILE = '/Fake-Spotify/mobile/:token'
const LOCAL_MOBILE = '/mobile/:token'

const ONLINE_PUBLIC = '/'
const LOCAL_PUBLIC = ''

export const SERVER_URL = process.env.NODE_ENV === 'development' ? LOCAL_SERVER : ONLINE_SERVER
export const LOGIN_URL = process.env.NODE_ENV === 'development' ? LOCAL_LOGIN : ONLINE_LOGIN
export const DESKTOP_URL = process.env.NODE_ENV === 'development' ? LOCAL_DESKTOP : ONLINE_DESKTOP
export const MOBILE_URL = process.env.NODE_ENV === 'development' ? LOCAL_MOBILE : ONLINE_MOBILE
export const PUBLIC_URL = process.env.NODE_ENV === 'development' ? LOCAL_PUBLIC : ONLINE_PUBLIC