import { productActions } from "../slices/productSlice";

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
