import { Router } from 'express';
import ProductsController from '../controllers/ProductsController';
import { validateAmount, validateName } from '../middlewares/productValidation';

const ProductsRouter = Router();

ProductsRouter.get('/', ProductsController.list);
ProductsRouter.post('/', validateName, validateAmount, ProductsController.create);

export default ProductsRouter;