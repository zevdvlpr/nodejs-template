import { Request, Response } from 'express';

export default class UsersController {
  index(req: Request, res: Response) {
    return res.json({ message: 'OK' });
  }
}
