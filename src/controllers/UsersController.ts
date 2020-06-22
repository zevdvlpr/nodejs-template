import { Request, Response } from "express";

import { User } from '@models/User';

export default class UsersController {
  index(req: Request, res: Response) {
    res.json({
      message: 'OK'
    });
  }
}
