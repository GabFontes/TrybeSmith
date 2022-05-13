import connection from './connection';
import IProducts from '../Interfaces/IProducts';

const list = async (): Promise<IProducts[]> => {
  const query = 'SELECT * FROM Trybesmith.Products';

  const [products] = await connection.execute(query);
  return products as IProducts[];
};

export default {
  list,
};