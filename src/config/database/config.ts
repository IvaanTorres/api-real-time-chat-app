import { config } from 'dotenv'
// Load .env file
config()

// MongoDB config
export const {
  DB_CONNECTION,
  DB_HOST,
  DB_PORT,
  DB_DATABASE,
  DB_PARAMS,
} = process.env

// Express config
export const {
  PORT,
} = process.env
