/* eslint-disable no-param-reassign */
import server from './app'
import { io } from './utils/socket.io/utils'
import socketSession from './socket'
import { PORT } from './config/database/config'

// Create the HTTP server listener
const httpServer = server.listen(PORT)
console.log(`Server running on port ${PORT}`)

// Connect sockets to WebSocket server
socketSession(io(httpServer))

// Database connection
import('./database')
