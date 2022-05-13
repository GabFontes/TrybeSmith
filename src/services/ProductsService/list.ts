import ProductModel from '../../models/ProductModel';

const list = async () => {
  const products = await ProductModel.list();
  return products;
};

export default list;