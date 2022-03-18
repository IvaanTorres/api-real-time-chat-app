import { Router } from 'express'

//! CONTROLLERS
import indexController from '../controllers/indexController'

const router = Router()

router.get('/', indexController.index)
router.get('/error', indexController.error)

export default router
