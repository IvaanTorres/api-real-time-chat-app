/* eslint-disable no-console */
import { Server as WebSocketServer } from 'socket.io'
import http from 'http'
import app from './app'
import { PORT } from './config'
import sockets from './sockets'

const server = http.createServer(app)
const httpServer = server.listen(PORT)
console.log('Server is running on port', PORT)

const io = new WebSocketServer(httpServer)
sockets(io)

/* -------------------------------- DATABASE -------------------------------- */
import('./database')
