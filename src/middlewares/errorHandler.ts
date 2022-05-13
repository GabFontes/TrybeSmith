import { Request, Response } from 'express';
import IError from '../Interfaces/IError';

export default (error: IError, _req: Request, res: Response) => {
  console.log(error);
  return res.status(500).send({ message: 'Something went wrong' });
};