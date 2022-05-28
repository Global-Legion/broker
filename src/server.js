const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const routes = require('./routes')

const server = express()
server.use(cors())
server.use(bodyParser.json())
routes.setRoutes(server)

module.exports = server
