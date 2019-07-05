module.exports = {
    config(app){
        require('../routes/authRouter').config(app)
    }
}