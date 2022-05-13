import { ResultSetHeader } from 'mysql2/promise';
import connection from './connection';
import ICreateUser from '../Interfaces/IUsers';

const create = async ({ username, classe, level, password }: ICreateUser): Promise<void> => {
  const query = `INSERT INTO Trybesmith.Users (username, classe, level, password)
   VALUES (?, ?, ?, ?)`;

  await connection.execute<ResultSetHeader>(query, [username, classe, level, password]);
};

export default {
  create,
};