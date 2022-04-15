/* eslint-disable import/prefer-default-export */
import { Server, Socket } from 'socket.io'
import Tag from '../../models/Tag'

/**
 * Create WebSocket server from HTTP server.
 * @param {Server} http - The HTTP server.
 * @returns The WebSocket server.
 */
const io = (http) => new Server(http, {
  cors: {
    origin: ['http://localhost', 'https://thunder-link.herokuapp.com'],
  },
})

/**
 * Create a new tag object.
 * @param {Socket} socket  The server socket. It is the user identifier.
 * @param {string} msg - The message in string format.
 * @returns {Tag} The tag object.
 */
const newTag = (socket: Socket, msg: string): Tag => ({ _id: socket.id, message: msg })

export {
  io,
  newTag,
}
