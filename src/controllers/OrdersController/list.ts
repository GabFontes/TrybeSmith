import { NextFunction, Request, Response } from 'express';
import OrdersService from '../../services/OrdersService';

const list = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const orders = await OrdersService.list();
    res.status(200).json(orders);
  } catch (error) {
    next(error);
  }
};

export default list;