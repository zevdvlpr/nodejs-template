import UsersController from '@controllers/UsersController';
import express from 'express';

const router = express.Router();

const usersController = new UsersController();

router.get('/', usersController.index);

export default router;
