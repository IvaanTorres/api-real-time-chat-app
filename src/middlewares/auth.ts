import { Request, Response, NextFunction } from 'express'

export const auth = () => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (req.session && req.session.user) return next()
    else res.render('auth/login', { title: 'Login' })
  }
}

export const role = (role: String) => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (role === req.session.role) next()
    else res.render('auth/login', { title: 'Login' })
  }
}
