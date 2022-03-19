import { config } from 'dotenv'

config()

export const {
  DB_CONNECTION, DB_HOST, DB_PORT, DB_DATABASE,
} = process.env

export const { PORT } = process.env
