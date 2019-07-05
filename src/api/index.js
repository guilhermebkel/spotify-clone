async function boot(){
    require('dotenv').config()
    require('./core/server').setup()
}

boot()