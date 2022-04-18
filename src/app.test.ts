import { Server } from 'http'
import { AddressInfo } from 'net'
import server from './app'

const serverPort = 5000

beforeAll(() => {
  jest.spyOn(global.console, 'warn').mockImplementation(jest.fn())
})

describe.skip('HTTP Server', () => {
  let listener: Server

  beforeAll(() => {
    listener = server.listen(serverPort)
  })

  afterAll(() => {
    listener.close()
  })

  test('should be defined', () => {
    expect(listener).toBeDefined()
  })

  test('should be listening', () => {
    expect(listener.listening).toBeTruthy()
  })

  test('should use the right address', () => {
    const { port } = listener.address() as AddressInfo
    expect(`http://localhost:${serverPort}`).toBe(`http://localhost:${port}`)
  })
})
