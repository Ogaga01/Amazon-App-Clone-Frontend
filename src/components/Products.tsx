import React from "react";
import { useAppSelector } from "../redux";
import ProductItem from "./ProductItem";
import styles from './../sass/_products.module.scss'

const Products = () => {
  const products = useAppSelector((state) => {
    return state.productSlice.products;
  });
  console.log(products);
  return <section className={styles["product__section"]}>
    {products.map((product)=>{
        return <ProductItem product={product}/>
    })}
  </section>;
};

export default Products;
