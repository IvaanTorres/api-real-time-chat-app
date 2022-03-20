import express from 'express'
/* import morgan from 'morgan' */
import path from 'path'

const app = express()

/* //! SETTINGS
app.set('port', process.env.PORT || 3000)

//! MIDDLEWARES
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json()) */

app.use(express.static(path.join(__dirname, 'public')))

export default app
