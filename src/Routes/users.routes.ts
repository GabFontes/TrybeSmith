import { Router } from 'express';
import UsersController from '../controllers/UsersController';
import {
  validateUsername,
  validateClass,
  validateLevel,
  validatePassword,
} from '../middlewares/userValidation';

const UsersRouter = Router();

UsersRouter.post(
  '/',
  validateUsername,
  validateClass,
  validateLevel,
  validatePassword,
  UsersController.create,
);

export default UsersRouter;