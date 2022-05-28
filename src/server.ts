import express from "express"
import cors from "cors"
import bodyParser from "body-parser"
import setRoutes from "./routes"
import { port } from "./conf"

const server = express()
server.use(cors())
server.use(bodyParser.json())
setRoutes(server)

server.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log("Broker started on port " + port)
})
