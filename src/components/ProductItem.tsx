import React, { FC } from "react";
import { Product } from "../type";
import styles from './../sass/_productitem.module.scss'
import { Link } from "react-router-dom";

interface Props {
  product: Product;
}

const ProductItem: FC<Props> = ({ product }) => {
  return <Link to={`/${product.id}`} className={styles["product"]}>
    <div className={styles["product__image"]}>
        <img src={product.photo} alt={product.name} className={styles["product__image--photo"]}/>
    </div>
    <div className={styles["product__info"]}>
        <h1 className={styles["product__info--name"]}>{product.name}</h1>
        <h3 className={styles["product__info--price"]}>{`Price: $${product?.price}`} </h3>
        <button className={styles["product__info--button"]}>Add to Cart</button>
    </div>
  </Link>;
};

export default ProductItem;
