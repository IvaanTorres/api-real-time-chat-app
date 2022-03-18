/* eslint-disable no-console */
//! DOTENV CONFIG
import mongoose from 'mongoose'

require('dotenv').config()

mongoose
  .connect(
    `${process.env.DB_CONNECTION}://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`,
  )
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log(`An error occured during the MongoDB connection\nERROR: ${err}`))
