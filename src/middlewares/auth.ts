import { Server } from 'socket.io'

/**
 * Handle the client credentials.
 *
 * @param {Server} srv - The Socket.io server.
 * @returns {Server} - The Socket.io server.
 */
const auth = (srv: Server): Server => (
  srv.use((socket, next) => {
    const { username } = socket.handshake.auth
    if (!username) {
      return next(new Error('Invalid username'))
    }
    // eslint-disable-next-line no-param-reassign
    (socket as any).username = username as string
    return next()
  })
)

export default auth
