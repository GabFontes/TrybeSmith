import { Router } from 'express';
import ProductsController from '../controllers/ProductsController';

const ProductsRouter = Router();

ProductsRouter.get('/', ProductsController.list);

export default ProductsRouter;