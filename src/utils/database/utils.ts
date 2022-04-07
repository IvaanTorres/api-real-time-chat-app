/* eslint-disable import/prefer-default-export */
import mongoose from 'mongoose'

/**
 * Set a new connection to MongoDB.
 * @param {string} connection - The database connection string.
 * @param {string} host - The database host.
 * @param {string} port - The database port.
 * @param {string} db - The database name.
 */
const conn = async (connection: string, host: string, port: string, db: string) => {
  try {
    await mongoose.connect(`${connection}://${host}:${port}/${db}`)
    console.log('Connected to MongoDB')
  } catch (err) {
    console.log(`An error occured during the MongoDB connection\nERROR: ${err}`)
  }
}

export { conn }
