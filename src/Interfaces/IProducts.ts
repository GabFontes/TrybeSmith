interface IListProducts {
  id: number;
  name: string;
  amount: string;
  orderId: number;
}

interface ICreateProducts {
  id?: number;
  name: string;
  amount: string;
  orderId?: number;
}

export {
  IListProducts,
  ICreateProducts,
};