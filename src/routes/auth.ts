import { Router } from 'express'
const router = Router()

//! MIDDLEWARES
/* import { auth } from '../middlewares/auth' */

//! CONTROLLERS
import authController from '../controllers/authController'

router.get('/register', authController.showRegister)
router.post('/register', authController.register)
router.get('/login', authController.showLogin)
router.post('/login', authController.login)
router.get('/logout', authController.logout)

export default router
