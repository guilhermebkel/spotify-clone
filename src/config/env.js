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
export const TOKEN = 'BQD0Vu36IdNu7HlQuWLa6e8Aeq7aH2Xz3dEUdaPppt0Jq4Gm0Ae5lLByUqUro7LMaiD3S-NPixg4EFksd93Pspu0TcC-mK1CHUkJwKoeHpJqY4fvVuvM8ou-V_y3ualdosyXJjJ-TEn_Y-vsbnSB26WafdTOgq7UtIpi_G90AckHFQ'