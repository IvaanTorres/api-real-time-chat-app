import { createServer, Server } from 'http'
import Client, { Socket as SocketIOClient } from 'socket.io-client'
import { Server as SocketIOServer, Socket } from 'socket.io'
import { AddressInfo } from 'net'
import { io } from './utils/socket.io/utils'
import socketSession from './socket'

const serverPort = 4000

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
    ioServer = io(httpServer)
    // Connect socket to WebSocket server
    socketSession(ioServer)
    ioServer.on('connection', (socket) => {
      socketServer = socket
    })
    ioClient.on('connect', done)
  })

  afterAll(() => {
    ioServer.close()
    ioClient.disconnect()
  })

  test('should work', (done) => {
    ioClient.on('hello', (arg) => {
      expect(arg).toBe('world')
      done()
    })
    socketServer.emit('hello', 'world')
  })

  test('should work (with ack)', (done) => {
    socketServer.on('hi', (cb) => {
      cb('hola')
    })
    ioClient.emit('hi', (arg) => {
      expect(arg).toBe('hola')
      done()
    })
  })
})
