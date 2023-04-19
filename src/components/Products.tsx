import React, { FC } from "react";
import { useAppSelector } from "../redux";
import ProductItem from "./ProductItem";
import styles from "./../sass/_products.module.scss";
import { Product } from "../type";

const Products: FC = () => {
  const products = useAppSelector((state) => {
    return state.productSlice.products;
  });
  return (
    <section className={styles["product__section"]}>
      {products.map((product:Product) => {
        return <ProductItem key={product.id} product={product} />;
      })}
    </section>
  );
};

export default Products;
