import { createServer, Server } from 'http'
import Client, { Socket as SocketIOClient } from 'socket.io-client'
import { Server as SocketIOServer, Socket } from 'socket.io'
import { AddressInfo } from 'net'
import mongoose from 'mongoose'
import { io } from './utils/socket.io/utils'
import socketSession, { loadMessages, onClientMessage } from './socket'
import clientEvents from './utils/socket.io/events.client'
import { Message, MessageModel } from './models/Message'
import serverEvents from './utils/socket.io/events.server'
import message from './__mocks__/message'
import client from './__mocks__/user'

const serverPort = 4000

Date.now = jest.fn(() => new Date(Date.UTC(2017, 1, 14)).valueOf())

beforeAll(() => {
  jest.spyOn(global.console, 'warn').mockImplementation(jest.fn())
})

describe('Socket.IO', () => {
  let httpServer: Server
  let ioClient: SocketIOClient
  let ioServer: SocketIOServer
  let socketServer: Socket

  beforeAll((done) => {
    // Create HTTP server
    const server = createServer()
    httpServer = server.listen(serverPort)
    const { port } = httpServer.address() as AddressInfo
    ioClient = Client(`http://localhost:${port}`)
    // Set the client credentials
    ioClient.auth = { username: client.username }

    ioServer = io(httpServer)
    // Connect socket to WebSocket server
    socketSession(ioServer)
    ioServer.on('connection', (socket: Socket) => {
      socketServer = socket
    })
    ioClient.on('connect', done)
  })

  afterAll(() => {
    ioServer.close()
    ioClient.disconnect()
  })

  describe('Events', () => {
    let db: mongoose.Connection
    const collection = 'test_thunder-link'

    beforeAll(async () => {
      await mongoose.connect(`mongodb://localhost:27017/${collection}`)
      db = mongoose.connection
      await db.createCollection(collection)
    })

    afterAll(async () => {
      await db.dropCollection(collection)
      await db.dropDatabase()
      await db.close()
    })

    test('should save the message sent by the client', () => {
      const {
        user, body, createdAt, updatedAt,
      } = message

      // Send the message to the server
      ioClient.emit(clientEvents.MESSAGE, message)
      socketServer.on(clientEvents.MESSAGE, async (msg) => {
        await onClientMessage(ioServer, msg)
        expect(msg).toEqual({
          user,
          body,
          createdAt: createdAt.toISOString(),
          updatedAt: updatedAt.toISOString(),
        })
      })
    })

    test('should send the stored messages to the client', async () => {
      // TODO: Check why I need to call this function twice to get the messages
      let messages: Message[] = await MessageModel.find().sort({ createdAt: 1 })
      // eslint-disable-next-line prefer-const
      messages = await MessageModel.find().sort({ createdAt: 1 })

      await loadMessages(socketServer)
      ioClient.on(serverEvents.LOAD_MESSAGES, (msgs: Message[]) => {
        const messagesWithStringDate = messages.map(({
          __v, id, user, body, createdAt, updatedAt,
        }) => ({
          __v,
          _id: id,
          user,
          body,
          createdAt: createdAt.toISOString(),
          updatedAt: updatedAt.toISOString(),
        }))
        expect(msgs).toEqual(messagesWithStringDate)
      })
    })
  })
})
