import express from 'express'
/* import morgan from 'morgan' */
import path from 'path'

//! ROUTES
/* import bookRoutes from './routes/book'
import indexRoutes from './routes/index'
import authRoutes from './routes/auth' */

const app = express()

/* //! SETTINGS
app.set('port', process.env.PORT || 3000)

//! MIDDLEWARES
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json()) */

/* //! ROUTER
app.use('/', indexRoutes)
app.use('/auth', authRoutes)
app.use('/books', bookRoutes) */

app.use(express.static(path.join(__dirname, 'public')))

export default app
