import React, { FC, useState } from "react";
import styles from "./../sass/_manageproducts.module.scss";

const ManageProducts: FC = () => {
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<number>();
  const [description, setDescription] = useState<string>("");
  const [photo, setPhoto] = useState<string>("");

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
          <label htmlFor="image" className={styles["products__add--label"]}>
            Product Image
          </label>
          <input
            type="file"
            accept="image/*"
            className={styles["products__add--input"]}
            id="image"
            name="image"
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
          <button type="button" className={styles["products__add--button"]}>
            Submit
          </button>
        </div>
      </div>
    </section>
  );
};

export default ManageProducts;
