/* eslint-disable no-empty-function */
/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
import { Request, Response } from 'express'

//! MODELS
import { UserModel } from '../models/Auth'

class AuthController {
  /**
   * Register.
   *
   * @param req Request
   * @param res Response
   * @return Template view (render)
   */
  public async register(req: Request, res: Response) {
  }

  /**
   * Login.
   *
   * @param req Request
   * @param res Response
   * @return Template view (render)
   */
  public async login(req: Request, res: Response) {
  }

  /**
   * Logout.
   *
   * @param req Request
   * @param res Response
   * @return Template view (render)
   */
  public logout(req: Request, res: Response) {
  }
}

const authController = new AuthController()
export default authController
