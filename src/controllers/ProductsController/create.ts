import { NextFunction, Request, Response } from 'express';
import ProductsService from '../../services/ProductsService';

const create = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const newProduct = await ProductsService.create(req.body);
    console.log(newProduct);

    res.status(201).json(newProduct);
  } catch (error) {
    next(error);
  }
};

export default create;