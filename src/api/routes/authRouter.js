const authController = require('../controllers/authController')

module.exports = {
    config(app){
        app.get('/login', authController.login)
        app.get('/callback', authController.callback)
    }
}