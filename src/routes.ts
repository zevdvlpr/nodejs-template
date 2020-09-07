import express from 'express';

import UsersController from '@controllers/UsersController';

const router = express.Router();

const usersController = new UsersController();

router.get('/', usersController.index);

export default router;
