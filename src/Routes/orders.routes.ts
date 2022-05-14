import { Router } from 'express';
import OrdersController from '../controllers/OrdersController';

const OrdersRouter = Router();

OrdersRouter.get('/', OrdersController.list);

export default OrdersRouter;