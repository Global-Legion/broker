import express from "express"
import cors from "cors"
import bodyParser from "body-parser"
import setRoutes from "./routes"
import { port } from "./conf"

import PendingJobQueueSingleton from "./model/PendingJobsQueueSingleton"

const server = express()
server.use(cors())
server.use(bodyParser.json())
setRoutes(server)

server.listen(port, () => {
    PendingJobQueueSingleton.createInstance()
    // tslint:disable-next-line:no-console
    console.log("Broker started on port " + port)
})
