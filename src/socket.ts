import { Server } from 'socket.io'

/**
 * Connect socket to WebSocket server.
 * @param {Server} io - The socket.io server.
 */
export default (io: Server) => {
  io.on('connection', (socket) => {
    console.log('New client connected')

    socket.on('test', () => {
      console.log('test')
    })
  })
}
