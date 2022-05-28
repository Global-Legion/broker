const express = require('express')
const cors = require('cors')

const server = express()
server.use(cors())

server.get('/example', require('./routes/example.get.js').example)

module.exports = server
