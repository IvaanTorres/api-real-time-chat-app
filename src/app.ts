import express from 'express'
import path from 'path'

// Create a new express application instance
const app = express()
// Disable x-powered-by header to not disclose technologies used on a website
app.disable('x-powered-by')
// Set public folder as static folder to serve static files
app.use(express.static(path.join(__dirname, 'public')))

export default app
