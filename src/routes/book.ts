import { Router } from 'express'

//! MIDDLEARES
/* import { auth, role } from '../middlewares/auth' */

//! CONTROLLERS
import bookController from '../controllers/commentController'

const router = Router()

router.get('/', bookController.index)
router.post('/', bookController.store)
router.get('/add', bookController.create)
router.get('/:id', bookController.show) // ? .show is down to let .create work
router.put('/:id', bookController.update)
router.get('/:id/edit', bookController.edit)
router.delete('/:id', bookController.destroy)

export default router
