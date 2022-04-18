import { Server, Socket } from 'socket.io'
import User from '../../models/User'

/**
 * Create WebSocket server from HTTP server.
 * @param {Server} http - The HTTP server.
 * @returns {Server} The WebSocket server.
 */
const io = (http) => {
  const srv = new Server(http, {
    cors: {
      origin: ['http://localhost', 'https://thunder-link.herokuapp.com'],
    },
  })

  // Middleware to handle the auth credentials
  srv.use((socket, next) => {
    const { username } = socket.handshake.auth
    if (!username) {
      return next(new Error('Invalid username'))
    }
    // eslint-disable-next-line no-param-reassign
    (socket as any).username = username as string
    return next()
  })

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
