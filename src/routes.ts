import push from "./routes/job/post.push"
import pull from "./routes/job/get.pull"

export default function setRoutes(server: any){
    server.post('/job/push', push)
    server.get('/job/pull', pull)
}
