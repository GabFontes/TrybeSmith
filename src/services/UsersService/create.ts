import ICreateUser from '../../Interfaces/IUsers';
import UsersModel from '../../models/UsersModel';
import tokenGenerator from '../../Helpers/tokenGenerator';

const create = async ({ username, classe, level, password }: ICreateUser): Promise<string> => {
  await UsersModel.create({ username, classe, level, password });
  const token = tokenGenerator({ username, classe, level });
  return token;
};

export default create;