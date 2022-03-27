/* eslint-disable no-console */
import { Server as WebSocketServer } from 'socket.io'
import http from 'http'
import app from './app'
import { API_PORT } from './config'
import sockets from './sockets'

const server = http.createServer(app)
const httpServer = server.listen(API_PORT)
console.log('Server is running on port', API_PORT)

const io = new WebSocketServer(httpServer, {
  cors: {
    origin: '*',
  },
})
sockets(io)

/* -------------------------------- DATABASE -------------------------------- */
import('./database')
