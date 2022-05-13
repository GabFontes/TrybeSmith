import express from 'express';
import errorHandler from './middlewares/errorHandler';
import ProductsRouter from './Routes/products.routes';

const app = express();

app.use(express.json());
app.use('/products', ProductsRouter);
app.use(errorHandler);

export default app;
