const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const server = express()
server.use(cors())
server.use(bodyParser.json())

server.post('/push-job', require('./routes/post.push-job').pushJob)

module.exports = server
