import { Product } from "../../type";
import { productActions } from "../slices/productSlice";
import { singleProductAction } from "../slices/singleProductSlice";
import axios from "axios";

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

export const editSingleProduct = async (
  token: string,
  id: string,
  name: string,
  price: number,
  description: string,
  photo: string
) => {
  const response = await fetch(`${url}/${id}`, {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      price,
      description,
      photo,
    }),
  });
  const data = await response.json();
  console.log(data);
};

// acktpszn

// export const uploadToCloudinary = async (image: File, preset:string) =>{
//   const response = await fetch('https://api.cloudinary.com/v1_1/dii1zjc2a/image/upload', {
//     method: "POST",
//     body: {image, preset}
//   })
// }

export const uploadToCloudinary = (image: File, preset: string) => {
  const formData = new FormData();
  formData.append("file", image);
  formData.append("upload_preset", preset);

  axios
    .post("https://api.cloudinary.com/v1_1/dii1zjc2a/image/upload", formData)
    .then((response) => {
      console.log(response);
    });
};
