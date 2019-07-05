module.exports = {
    config(app){
        cors(app)
    }
}

function cors(server) {
    server.on('MethodNotAllowed', unknownMethodHandler)
    function unknownMethodHandler(req, res) {
      if (req.method.toLowerCase() === 'options') {
        console.log('received an options method request')
        var allowHeaders = ['Accept', 'Accept-Version', 'Content-Type', 'Api-Version', 'Origin', 'X-Requested-With']
        if (res.methods.indexOf('OPTIONS') === -1) res.methods.push('OPTIONS')
        res.header('Access-Control-Allow-Credentials', true)
        res.header('Access-Control-Allow-Headers', allowHeaders.join(', '))
        res.header('Access-Control-Allow-Methods', res.methods.join(', '))
        res.header('Access-Control-Allow-Origin', req.headers.origin)
        return res.send(204);
      }
      else
        return res.send(new restify.MethodNotAllowedError())
    }
  }