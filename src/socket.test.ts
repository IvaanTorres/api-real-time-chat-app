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
import {
  DB_CONNECTION, DB_HOST, DB_PARAMS,
} from './config/database/config'

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
    const DB_DATABASE = 'test_thunder-link'

    beforeAll(async () => {
      await mongoose.connect(`${DB_CONNECTION}://${DB_HOST}/${DB_DATABASE}?${DB_PARAMS}`)
      db = mongoose.connection
      // await db.createCollection(DB_DATABASE)
    })

    beforeEach(async () => {
      await db.createCollection(DB_DATABASE)
    })

    afterAll(async () => {
      // await db.dropCollection(DB_DATABASE)
      await db.close()
    })

    afterEach(async () => {
      await db.dropDatabase()
    })

    test('should save the message sent by the client', async () => {
      const {
        user, body, createdAt, updatedAt,
      } = message

      // Send the message to the server
      ioClient.emit(clientEvents.MESSAGE, message)
      socketServer.on(clientEvents.MESSAGE, async (msg) => {
        await onClientMessage(ioServer, msg)
        expect(msg).toStrictEqual({
          user,
          body,
          createdAt: createdAt.toISOString(),
          updatedAt: updatedAt.toISOString(),
        })
      })
    })

    test('should send the stored messages to the client', async () => {
      const messages: Message[] = await MessageModel.find().sort({ createdAt: 1 })

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
        expect(msgs).toStrictEqual(messagesWithStringDate)
      })
    })
  })
})
