export type Product = {
  id: string;
  name: string;
  photo: string;
  description?: string;
  price: number;
  totalPrice?: number;
  totalQuantity?: number;
};

// export type Products = {
//   id: string;
//   name: string;
//   photo: string;
//   price: number;
//   totalPrice: number;
//   totalQuantity: number;
// };

export type Cart = {
  products: any[] | undefined;
  totalPrice: number | undefined;
  totalQuantity: number | undefined;
};
