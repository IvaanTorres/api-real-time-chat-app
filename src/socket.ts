import { Server, Socket } from 'socket.io'
import { Message, MessageModel } from './models/Message'
import User from './models/User'
import client from './utils/socket.io/events.client'
import server from './utils/socket.io/events.server'
import { user } from './utils/socket.io/utils'

/**
 * Handles the socket.io connection.
 * Listen for user connection
 * @param {Server} io - The socket.io server.
 * @param {Socket} socket - The server socket.
 */
const onConnection = (io: Server, socket: Socket) => {
  const users: User[] = []
  // Load the connected socket clients and store them as User instances.
  io.of('/').sockets.forEach((connectedClient: Socket) => {
    const connectedUser: User = {
      id: connectedClient.id,
      username: (connectedClient as any).username,
    }
    users.push(connectedUser)
  })
  // Emit the connected users to the client.
  socket.emit(server.USERS, users)
  // Emit the welcome message to the client.
  socket.emit(server.WELCOME, user(socket))
  // Emit the new connected user message to all the clients except this socket.
  socket.broadcast.emit(server.USER_CONNECTION, user(socket))
}

/**
 * Load the stored messages.
 * @param {Socket} socket - The server socket.
 */
const loadMessages = async (socket: Socket) => {
  const messages = await MessageModel.find().sort({ createdAt: 1 })
  // Emit the messages to the client.
  socket.emit(server.LOAD_MESSAGES, messages)
}

/**
 * Handles the socket.io disconnection.
 * Listen for user disconnection
 * @param {Socket} socket - The server socket.
 */
const onDisconnection = (socket: Socket) => {
  // Emit the disconnected user message to all the clients except this socket.
  socket.broadcast.emit(server.USER_DISCONNECTION, user(socket))
}

/**
 * Handle the new message event trigered by the client.
 * Listen for new message
 * @param {Server} io - The socket.io server.
 * @param {Message} data - The message object.
 */
const onClientMessage = async (io: Server, data: Message) => {
  if (data.user && data.body) {
    const newMessage = new MessageModel(data)
    const savedMessage = await newMessage.save()
    // Emit the message event to all connected clients.
    io.emit(server.SAVED_MESSAGE, savedMessage)
  }
}

/**
 * Connect socket to WebSocket server.
 * @param {Server} io - The socket.io server.
 */
export default (io: Server) => {
  io.on(client.CONNECTION, (socket: Socket) => {
    // Handle connection
    onConnection(io, socket)
    // Load messages on connection
    loadMessages(socket)
    // Listen for new message
    socket.on(client.MESSAGE, (obj: Message) => onClientMessage(io, obj))
    // Listen for user disconnection
    socket.on(client.DISCONNECTION, () => onDisconnection(socket))
  })
}
