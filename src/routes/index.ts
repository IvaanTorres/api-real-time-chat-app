import { Router } from 'express'
const router = Router()

//! CONTROLLERS
import indexController from '../controllers/indexController'

router.get('/', indexController.index)
router.get('/error', indexController.error)

export default router
