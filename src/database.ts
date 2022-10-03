import { conn } from './utils/database/utils'
import {
  DB_CONNECTION, DB_DATABASE, DB_HOST,
} from './config/database/config'

// Connect to MongoDB
conn(DB_CONNECTION!, DB_HOST!, DB_DATABASE!, 'retryWrites=true&w=majority')
