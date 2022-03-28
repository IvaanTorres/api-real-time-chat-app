/* eslint-disable no-console */
import mongoose from 'mongoose'
import {
  DB_CONNECTION, DB_DATABASE, DB_HOST, DB_PORT,
} from './config'

// Connect to MongoDB
mongoose
  .connect(
    `${DB_CONNECTION}://${DB_HOST}:${DB_PORT}/${DB_DATABASE}`,
  )
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log(`An error occured during the MongoDB connection\nERROR: ${err}`))
