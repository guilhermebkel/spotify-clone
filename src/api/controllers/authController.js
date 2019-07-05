const querystring = require('querystring')
require('dotenv').config()

module.exports = {
    login,
    callback
}

async function login(req, res){
    res.redirect('https://accounts.spotify.com/authorize?' +
        querystring.stringify({
            response_type: 'code',
            client_id: process.env.CLIENT_ID,
            scope: 'user-read-private user-read-email',
            redirect_uri: process.env.PUBLIC_URL + 'callback'
        }))
}

async function callback(req, res){
    let code = req.query.code || null
    let authOptions = {
        url: 'https://accounts.spotify.com/api/token',
        form: {
            code,
            redirect_uri: process.env.PUBLIC_URL + 'callback',
            grant_type: 'authorization_code'
        }
    }
}