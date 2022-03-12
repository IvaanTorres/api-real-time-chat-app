import app from './app'

/* -------------------------------- DATABASE -------------------------------- */
import('./database')

/* ----------------------------------- APP ---------------------------------- */
app.listen(app.get('port'), () => {
  console.log('Server is running on port', app.get('port'))
})
