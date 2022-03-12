import bcrypt from 'bcrypt'
import { Request, Response } from 'express'

//! MODELS
import { UserModel } from '../models/Auth'

class AuthController {
  /**
   * Display the register form.
   *
   * @param req Request
   * @param res Response
   * @return Template view (render)
   */
  public showRegister(req: Request, res: Response) {}
  /**
   * Register.
   *
   * @param req Request
   * @param res Response
   * @return Template view (render)
   */
  public async register(req: Request, res: Response) {
    try {
      const { user, password } = req.body
      const searchedUser = await UserModel.findOne({
        user: user,
      })
      if (searchedUser) {
        const hashPassword = await bcrypt.hash(password, 10)
        const newUser = new UserModel({
          user: user,
          password: hashPassword,
          role: '0',
        })
        await newUser.save()
        res.status(200).json(newUser)
      }
    } catch (error) {
      res.status(500).json(error)
    }
  }

  /**
   * Display the login form.
   *
   * @param req Request
   * @param res Response
   * @return Template view (render)
   */
  public showLogin(req: Request, res: Response) {}

  /**
   * Login.
   *
   * @param req Request
   * @param res Response
   * @return Template view (render)
   */
  public async login(req: Request, res: Response) {
    try {
      const { user, password } = req.body
      const userFound = await UserModel.findOne({
        user: user,
      })
      const match = await bcrypt.compare(password, userFound?.password)
      if (userFound != null && match) {
        //Logged
      } else {
        //Error: Didn't find / match
      }
    } catch (error) {
      res.status(500).json(error)
    }
  }

  /**
   * Logout.
   *
   * @param req Request
   * @param res Response
   * @return Template view (render)
   */
  public logout(req: Request, res: Response) {
    try {
      //Logout
    } catch (error) {
      res.status(500).json(error)
    }
  }
}

const authController = new AuthController()
export default authController
