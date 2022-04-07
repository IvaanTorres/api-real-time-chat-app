/* eslint-disable no-unused-vars */
import { io } from './utils'

beforeAll(() => {
  jest.spyOn(global.console, 'warn').mockImplementation(jest.fn())
})

describe.skip('Socket.IO Utils', () => {
  test.skip('test', () => {})
})
