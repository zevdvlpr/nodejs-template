import { Request, Response } from "express";

export default class UsersController {
  index(req: Request, res: Response) {
    res.json({
      message: 'OK'
    });
  }
}
