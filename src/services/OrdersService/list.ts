import OrdersModel from '../../models/OrdersModel';

const list = async () => {
  const orders = await OrdersModel.list();
  return orders;
};

export default list;