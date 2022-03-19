/* eslint-disable no-empty-function */
/* eslint-disable no-unused-vars */
import { Request, Response } from 'express'

//! MODELS
import { Comment, CommentModel } from '../models/Comment'

class CommentController {
  /**
   * Display a listing of the resource.
   *
   * @param req Request
   * @param res Response
   * @return Template view (render)
   */
  public async index(req: Request, res: Response): Promise<void> {
    res.status(200).json({ error: 'no' })
  }

  /**
   * Display the specified resource.
   *
   * @param req Request
   * @param res Response
   * @return Template view (render)
   */
  public async show(req: Request, res: Response) {

  }

  /**
   * Show the form for creating a new resource.
   *
   * @param req Request
   * @param res Response
   * @return Template view (render)
   */
  public create(req: Request, res: Response) {}

  /**
   * Store a newly created resource in storage.
   *
   * @param req Request
   * @param res Response
   * @return Template view (render)
   */
  public async store(req: Request, res: Response) {

  }

  /**
   * Show the form for editing the specified resource.
   *
   * @param req Request
   * @param res Response
   * @return Template view (render)
   */
  public async edit(req: Request, res: Response) {}

  /**
   * Update the specified resource in storage.
   *
   * @param req Request
   * @param res Response
   * @return Template view (render)
   */
  // ? In case of wanting to update a subdocument, use promises or $set
  public async update(req: Request, res: Response) {

  }

  /**
   * Delete the specified resource from storage.
   *
   * @param req Request
   * @param res Response
   * @return Template view (render)
   */
  public async destroy(req: Request, res: Response) {

  }
}

const commentController = new CommentController()
export default commentController
