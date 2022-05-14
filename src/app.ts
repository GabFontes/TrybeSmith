import express from 'express';
import errorHandler from './middlewares/errorHandler';
import OrdersRouter from './Routes/orders.routes';
import ProductsRouter from './Routes/products.routes';
import UsersRouter from './Routes/users.routes';

const app = express();

app.use(express.json());
app.use('/products', ProductsRouter);
app.use('/users', UsersRouter);
app.use('/orders', OrdersRouter);
app.use(errorHandler);

export default app;
