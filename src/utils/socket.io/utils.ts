/* eslint-disable import/prefer-default-export */
import { Server } from 'socket.io'

/**
 * Create WebSocket server from HTTP server.
 * @param {Server} http - The HTTP server.
 * @returns The WebSocket server.
 */
const io = (http) => new Server(http)

export {
  io,
}