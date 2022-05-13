import { NextFunction, Request, Response } from 'express';
import UsersService from '../../services/UsersService';

const create = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = await UsersService.create(req.body);
    res.status(201).json({ token });
  } catch (error) {
    next(error);
  }
};

export default create;