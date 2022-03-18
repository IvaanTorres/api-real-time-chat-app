import { Router } from 'express'

//! MIDDLEWARES
/* import { auth } from '../middlewares/auth' */

//! CONTROLLERS
import authController from '../controllers/authController'

const router = Router()

router.post('/register', authController.register)
router.post('/login', authController.login)
router.get('/logout', authController.logout)

export default router
