/* eslint-disable no-param-reassign */
import { Server, Socket } from 'socket.io'
import { Message, MessageModel } from './models/Message'
import { newTag } from './utils/socket.io/utils'

/**
 * Handles the socket.io connection.
 * Listen for user connection
 * @param {Socket} socket - The server socket.
 */
const onConnection = (socket: Socket) => {
  socket.emit('server:welcome', newTag(socket, 'Welcome to the chat'))
  socket.broadcast.emit('server:user-connection', newTag(socket, 'A new user has joined the chat'))
}
/**
 * Load the stored messages.
 * @param {Server} io - The socket.io server.
 */
const loadMessages = async (socket: Socket) => {
  const messages = await MessageModel.find().sort({ createdAt: 1 })
  socket.emit('server:load-messages', messages)
}
/**
 * Handles the socket.io disconnection.
 * Listen for user disconnection
 * @param {Socket} socket - The server socket.
 */
const onDisconnection = (socket: Socket) => {
  socket.broadcast.emit('server:user-disconnection', newTag(socket, 'A user has left the chat'))
}
/**
 * Handle the message event trigered by the client.
 * Listen for new message
 * @param {Server} io - The socket.io server.
 * @param {Message} data - The message object.
 */
const onClientMessage = async (io: Server, data: Message) => {
  if (data.user && data.body) {
    const newMessage = new MessageModel(data)
    const savedMessage = await newMessage.save()
    // Send the message to all connected clients.
    io.emit('server:saved-message', savedMessage)
  }
}

/**
 * Connect socket to WebSocket server.
 * @param {Server} io - The socket.io server.
 */
export default (io: Server) => {
  io.on('connection', (socket: Socket) => {
    // Handle connection
    onConnection(socket)
    // Load messages on connection
    loadMessages(socket)
    // Listen for new message
    socket.on('client:message', (obj: Message) => onClientMessage(io, obj))
    // Listen for user disconnection
    socket.on('disconnect', () => onDisconnection(socket))
  })
}
