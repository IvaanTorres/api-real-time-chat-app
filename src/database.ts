import { conn } from './utils/database/utils'
import {
  DB_CONNECTION, DB_DATABASE, DB_HOST, DB_PORT,
} from './config/database/config'

// Connect to MongoDB
conn(DB_CONNECTION!, DB_HOST!, DB_PORT!, DB_DATABASE!)
