import { RowDataPacket } from 'mysql2/promise';
import connection from './connection';

const list = async () => {
  const [orders] = await connection.execute<RowDataPacket[]>('SELECT * FROM Trybesmith.Orders');

  const [products] = await connection.execute<RowDataPacket[]>('SELECT * FROM Trybesmith.Products');
  const ordersWithProductsIds = orders.map((ord) => ({
    ...ord,
    productsIds: products.filter((prod) => prod.orderId === ord.id).map((e) => e.id),
  }));
  return ordersWithProductsIds;
};

export default {
  list,
};