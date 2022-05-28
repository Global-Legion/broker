function routes(path){
    return './routes/' + path
}

module.exports = {
    setRoutes
}

function setRoutes(server){
    server.post('/job/push', require(routes('job/post.push')).push)
    server.get('/job/pull', require(routes('job/get.pull')).pull)
}
