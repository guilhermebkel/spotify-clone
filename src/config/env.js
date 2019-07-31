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
export const TOKEN = 'BQD5_YArsANKG6mHFIcFVydJjWZIiain3SvXlNbm1vLVGpSdcUbb1J5_nRF07vIb6bX19AuGW-B5h6wtYRlbM3Ms5-Yq3b8xC2JprE-ciA1Dl2nIdNStDQqfiubfKwydi0fUYmDcO1v1dlTSzfYYlehAkqO8Us1B6GSt8kc2JQq79Q'