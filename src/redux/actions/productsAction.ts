import { Product } from "../../type";
import { productActions } from "../slices/productSlice";
import { singleProductAction } from "../slices/singleProductSlice";

const url: string =
  "https://amazon-clone-api-zq31.onrender.com/api/v1/products";

export const createNewProduct = (
  token: string,
  name: string,
  price: number,
  description: string
) => {
  return async (_dispatch: any) => {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        name,
        price,
        description,
        // photo,
      }),
    });
    const data = await response.json();
    console.log(data);
  };
};

export const fetchProductsData = () => {
  return async (_dispatch: any) => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.data.data);
    const productData = data.data.data;

    _dispatch(productActions.replaceProducts(productData));
  };
};

export const fetchSingleProduct = (id: string) => {
  return async (_dispatch: any) => {
    const response = await fetch(`${url}/${id}`);
    const data = await response.json();
    console.log(data);

    const products = data.data.data;
    console.log(products);

    const product: Product = {
      id: products.id,
      name: products.name,
      photo: products.photo,
      description: products.description,
      price: products.price,
    };

    _dispatch(singleProductAction.addProduct(product));
  };
};

export const deleteSingleProduct = async (id: string, token: string) => {
  const response = await fetch(`${url}/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  console.log(data);
};
