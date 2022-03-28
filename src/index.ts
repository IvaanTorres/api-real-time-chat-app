/* eslint-disable no-console */
import { Server as WebSocketServer } from 'socket.io'
import http from 'http'
import app from './app'
import { PORT } from './config'
import socket from './socket'

// Create HTTP server from express application
const server = http.createServer(app)
// Server listening on port $PORT
const httpServer = server.listen(PORT)
console.log('Server is running on port', PORT)
// Create WebSocket server from HTTP server
const io = new WebSocketServer(httpServer, {
  cors: {
    // Allow all origins
    origin: '*',
  },
})
// Connect sockets to WebSocket server
socket(io)
// Database connection
import('./database')
