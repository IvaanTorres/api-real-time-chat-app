/* eslint-disable no-unused-vars */
export default (io) => {
  io.on('connection', (socket) => {
    console.log('Welcome')
  })
}
