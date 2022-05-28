const server = require('./src/server')
const conf = require('./src/conf')

server.listen(conf.port, () => {
    console.log("Broker started on port " + conf.port)
})
