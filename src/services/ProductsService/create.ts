import { ICreateProducts } from '../../Interfaces/IProducts';
import ProductModel from '../../models/ProductModel';

const create = async (data: ICreateProducts) => {
  const newProduct = await ProductModel.create(data);
  return newProduct;
};

export default create;