const express = require('express')
const app = express()

module.exports = {
    setup
}

async function setup(){
    app.listen(process.env.PORT, () => {
        console.log(`- Server running at port [${process.env.PORT}]`)
    })
    require('./routes').config(app)
}