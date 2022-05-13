import { ResultSetHeader } from 'mysql2/promise';
import connection from './connection';
import { IListProducts, ICreateProducts } from '../Interfaces/IProducts';

const list = async (): Promise<IListProducts[]> => {
  const query = 'SELECT * FROM Trybesmith.Products';

  const [products] = await connection.execute(query);
  return products as IListProducts[];
};

const create = async ({ name, amount }: ICreateProducts): Promise<ICreateProducts> => {
  const query = `INSERT INTO Trybesmith.Products (name, amount)
   VALUES (?, ?)`;

  const [{ insertId }] = await connection.execute<ResultSetHeader>(query, [name, amount]);
  return {
    id: insertId,
    name,
    amount,
  };
};

export default {
  list,
  create,
};