//! DOTENV CONFIG
require('dotenv').config()
import mongoose from 'mongoose'

mongoose
  .connect(
    process.env.DB_CONNECTION +
      '://' +
      process.env.DB_HOST +
      ':' +
      process.env.DB_PORT +
      '/' +
      process.env.DB_DATABASE
  )
  .then((db) => console.log('Connected to MongoDB'))
  .catch((err) =>
    console.log('An error occured during the MongoDB connection\nERROR: ' + err)
  )
