const cors = require('cors')
const express = require('express')
const app = express()

module.exports = {
    setup
}

async function setup(){
    app.listen(process.env.SERVER_PORT || process.env.PORT, () => {
        console.log(`- Server running at port [${process.env.SERVER_PORT}]`)
    })
    app.get('/', (req, res) => res.json({"status": "Use /login to log into your spotify account!"}))
    app.use(cors())
    require('./routes').config(app)
    require('./middlewares').config(app)
}