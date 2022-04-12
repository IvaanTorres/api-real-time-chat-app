/* eslint-disable import/prefer-default-export */
import mongoose from 'mongoose'

/**
 * Set a new connection to MongoDB.
 * @param {string} connection - The database connection string.
 * @param {string} host - The database host.
 * @param {string} db - The database name.
 * @param {string} params - The database params.
 */
const conn = async (connection: string, host: string, db: string, params: string) => {
  const URI = `${connection}://${host}/${db}${params}`
  try {
    await mongoose.connect(URI)
    console.log('Connected to MongoDB: ', URI)
  } catch (err) {
    console.log(`An error occured during the MongoDB connection\nERROR: ${err}`)
  }
}

export { conn }
