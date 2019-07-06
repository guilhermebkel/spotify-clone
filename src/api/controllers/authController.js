const querystring = require('querystring')
const request = require('request')
const MobileDetect = require('mobile-detect')

module.exports = {
    login,
    callback
}

async function login(req, res){
    res.redirect('https://accounts.spotify.com/authorize?' +
        querystring.stringify({
            response_type: 'code',
            client_id: process.env.CLIENT_ID,
            scope: 'user-read-private user-read-email user-library-read',
            redirect_uri: process.env.SERVER_URL + 'callback'
        }))
}

async function callback(req, res){
    let code = req.query.code || null
    let authOptions = {
        url: 'https://accounts.spotify.com/api/token',
        form: {
            code,
            redirect_uri: process.env.SERVER_URL + 'callback',
            grant_type: 'authorization_code'
        },
        headers: {
            'Authorization': 'Basic ' + (new Buffer(
              process.env.CLIENT_ID + ':' + process.env.CLIENT_SECRET
            ).toString('base64'))
          },
          json: true
        }

        const userAgent = req.headers["user-agent"]
        let deviceRecognition = (
          new MobileDetect(userAgent)
        )
        const device = deviceRecognition.mobile() ? 'mobile/' : 'desktop/'

        request.post(authOptions, function(error, response, body) {
          var access_token = body.access_token
          let uri = process.env.CLIENT_URL
          res.redirect(uri + device + access_token)
        })
    }