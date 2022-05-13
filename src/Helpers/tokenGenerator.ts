import jwt from 'jsonwebtoken';
import ICreateUser from '../Interfaces/IUsers';

const JWT_SECRET = 'secret';

export default (payload: ICreateUser) => {
  const token = jwt.sign(payload, JWT_SECRET);
  return token;
};