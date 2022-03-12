import { Request, Response } from 'express'

class IndexController {
  /**
   * Display Index
   *
   * @param req Request
   * @param res Response
   * @return Template view (render)
   */
  public index(req: Request, res: Response) {}

  /**
   * Display Error.
   *
   * @param req Request
   * @param res Response
   * @return Template view (render)
   */
  public error(req: Request, res: Response) {}
}

const indexController = new IndexController()
export default indexController
