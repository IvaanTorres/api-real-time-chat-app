/* eslint-disable no-param-reassign */
import { Server, Socket } from 'socket.io'
import { Message, MessageModel } from './models/Message'

/**
 * Handles the socket.io connection.
 * Listen for user connection
 * @param {Socket} socket - The server socket.
 */
const onConnection = (socket: Socket) => {
  socket.emit('server:welcome', `Welcome to the chat! (${socket.id})`)
  socket.broadcast.emit('server:user-connection', `A new user has joined the chat (${socket.id})`)
  console.log('New client connected: ', socket.id)
}
/**
 * Load the stored messages.
 * @param {Server} io - The socket.io server.
 */
const loadMessages = async (io: Server) => {
  const messages = await MessageModel.find().sort({ createdAt: 1 })
  io.emit('server:load-messages', messages)
}
/**
 * Handles the socket.io disconnection.
 * Listen for user disconnection
 * @param {Socket} socket - The server socket.
 */
const onDisconnection = (socket: Socket) => {
  socket.broadcast.emit('server:user-disconnection', `A user has left the chat (${socket.id})`)
  console.log('Client disconnected: ', socket.id)
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
    console.log(data)
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
    loadMessages(io)
    // Listen for new message
    socket.on('client:message', (obj: Message) => onClientMessage(io, obj))
    // Listen for user disconnection
    socket.on('disconnect', () => onDisconnection(socket))
  })
}
