import { Server as SocketServer, Socket } from 'socket.io'
import { Server } from 'http'
import auth from '../../middlewares/auth'
import User from '../../models/User'

/**
 * Create WebSocket server from HTTP server.
 * @param {Server} http - The HTTP server.
 * @returns {SocketServer} The WebSocket server.
 */
const io = (http: Server): SocketServer => {
  const srv = new SocketServer(http, {
    cors: {
      origin: '*',
    },
  })

  // Middleware to handle the auth credentials
  auth(srv)

  return srv
}

/**
 * Create a new user instance.
 * @param {Socket} socket  The server socket. It is the user identifier.
 * @returns {User} The user instance.
 */
const user = (socket: Socket): User => (
  {
    id: socket.id,
    username: (socket as any).username,
  }
)

export {
  io,
  user,
}
