import express from 'express'
import morgan from 'morgan'
import path from 'path'

//! ROUTES
import bookRoutes from './routes/book'
import indexRoutes from './routes/index'
import authRoutes from './routes/auth'

const app = express()

//! SETTINGS
app.set('port', process.env.PORT || 3000)

//! MIDDLEWARES
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false })) //Makes readable form data sent from client
app.use(express.json()) //Transform data to JSON before dealing with it

//! ROUTER
app.use('/', indexRoutes)
app.use('/auth', authRoutes)
app.use('/books', bookRoutes)

export default app
