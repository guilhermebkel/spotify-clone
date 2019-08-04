const ONLINE_SERVER = 'https://spotify-api-server.herokuapp.com/'
const LOCAL_SERVER = 'http://localhost:5000/'

//const ONLINE_LOGIN = '/Fake-Spotify'
const LOCAL_LOGIN = '/'

//const ONLINE_DESKTOP = '/Fake-Spotify/desktop/:token'
const LOCAL_DESKTOP = '/desktop'

//const ONLINE_MOBILE = '/Fake-Spotify/mobile/:token'
const LOCAL_MOBILE = '/mobile'

//const ONLINE_PUBLIC = '/'
const LOCAL_PUBLIC = ''

export const SERVER_URL = process.env.NODE_ENV === 'development' ? LOCAL_SERVER : ONLINE_SERVER
export const LOGIN_URL = process.env.NODE_ENV === 'development' ? LOCAL_LOGIN : LOCAL_LOGIN
export const DESKTOP_URL = process.env.NODE_ENV === 'development' ? LOCAL_DESKTOP : LOCAL_DESKTOP
export const MOBILE_URL = process.env.NODE_ENV === 'development' ? LOCAL_MOBILE : LOCAL_MOBILE
export const PUBLIC_URL = process.env.NODE_ENV === 'development' ? LOCAL_PUBLIC : LOCAL_PUBLIC
export const TOKEN = 'BQApmwrK8cDM5gRX6UlRAznF1UNu7OeNi3mnNPyqEjOXh7z828P7a5q9Ptq8kjjK_p78SLRfJ7AGSWJVaVfdqxcYDELEfPQQjLxEtPd6ZgjEhdKFT8sv5O5QEMIPPlxjieCCkqZqTjEcLQh6yKcxE3FDAzwxdS4bx0Tn3OOsiEUHGw'