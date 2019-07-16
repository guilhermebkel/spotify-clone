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
export const TOKEN = 'BQBOwriRIebpp_XDYCIKeqTKg6dTXKbL3pDi4KNnKkjFc5wAw4LnusnSADp0w8SIBK-MBSOiIonRp3e4pEGP2fEweY1VssfvLg69K9Jdkd-577hFW73WaDlA5vhbVSTRYUSRm-kpat8Dhs6uw0VpREKsqOXFYpvMGj5UhI1JFv07nQ'