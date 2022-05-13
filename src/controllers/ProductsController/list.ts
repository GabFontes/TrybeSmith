import { NextFunction, Request, Response } from 'express';
import ProductsService from '../../services/ProductsService';

const list = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const products = await ProductsService.list();
    res.status(200).json(products);
  } catch (error) {
    next(error);
  }
};

export default list;