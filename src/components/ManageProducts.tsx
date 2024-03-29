import React, { FC, useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux";
import styles from "./../sass/_manageproducts.module.scss";
import {
  createNewProduct,
  uploadToCloudinary,
} from "../redux/actions/productsAction";

const ManageProducts: FC = () => {
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [description, setDescription] = useState<string>("");
  const [photo, setPhoto] = useState<string>("");
  const [image, setImage] = useState<File | null>();

  let user = useAppSelector((state) => {
    return state.loginSlice.user;
  });

  const dispatch = useAppDispatch();

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handlePrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(+e.target.value);
  };

  const handlePhoto = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoto(e.target.value);
  };

  const handleDescription = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
  };

  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImage(e.target.files?.[0]);
  };

  const addImage = () => {
    uploadToCloudinary(image!, "acktpszn");
    setImage(null);
  };

  const addProduct = () => {
    console.log("creating product");
    console.log(name, price, description);
    if (user !== null) {
      const token = user.token;

      dispatch(createNewProduct(token, name, price, description, photo));
      setDescription("");
      setName("");
      setPrice(0);
    }
  };

  return (
    <section className={styles["products"]}>
      <div className={styles["products__add"]}>
        <h1 className={styles["products__add--heading"]}>Add A Product</h1>
        <div className={styles["products__add--form"]}>
          <label htmlFor="name" className={styles["products__add--label"]}>
            Product Name
          </label>
          <input
            type="text"
            className={styles["products__add--input"]}
            id="name"
            name="name"
            value={name}
            onChange={handleName}
          />
          <label htmlFor="price" className={styles["products__add--label"]}>
            Product Price
          </label>
          <input
            type="number"
            className={styles["products__add--input"]}
            id="price"
            name="price"
            value={price}
            onChange={handlePrice}
          />
          <label htmlFor="photo" className={styles["products__add--label"]}>
            Product Photo
          </label>
          <input
            type="text"
            className={styles["products__add--input"]}
            id="photo"
            name="photo"
            value={photo}
            onChange={handlePhoto}
          />
          <label
            htmlFor="description"
            className={styles["products__add--label"]}
          >
            Product Description
          </label>
          <textarea
            className={styles["products__add--textarea"]}
            name="description"
            id="description"
            value={description}
            onChange={handleDescription}
          />
          <button
            type="button"
            className={styles["products__add--button"]}
            onClick={addProduct}
          >
            Submit
          </button>
        </div>
        <div className={styles["products__add--form"]}>
          <h1 className={styles["products__add--heading"]}>Add Product Image</h1>
          <label htmlFor="photo" className={styles["products__add--label"]}>
            Product Photo
          </label>
          <input
            type="file"
            accept="image/*"
            className={styles["products__add--input"]}
            id="photo"
            name="photo"
            onChange={handleImage}
          />
          <button
            type="button"
            className={styles["products__add--button"]}
            onClick={addImage}
          >
            Add Image
          </button>
        </div>
      </div>
    </section>
  );
};

export default ManageProducts;
