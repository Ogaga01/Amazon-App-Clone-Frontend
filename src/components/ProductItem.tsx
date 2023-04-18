import React, { FC } from "react";
import { Product, Products } from "../type";
import styles from './../sass/_productitem.module.scss'
import { Link } from "react-router-dom";
import { useAppSelector } from "../redux";

interface Props {
  product: Product;
}

const ProductItem: FC<Props> = ({ product }) => {
  const cart = useAppSelector((state)=>{
    return {...state.loginSlice.user?.cart}
  })

  const addToCart= (product: any) =>{
    const newItem = product;
    const existingItem = cart![0].products.find((product) => {
      return product.id === newItem.id;
    });
    cart![0].totalQuantity++;
    if (!existingItem) {
      cart![0].products.push({
        id: newItem.id,
        price: newItem.price,
        totalQuantity: 1,
        totalPrice: newItem.price,
        name: newItem.name,
        photo: newItem.photo
      });
    } else {
      existingItem.totalQuantity++ 
      existingItem.totalPrice =  existingItem.totalPrice - newItem.price
    }
    console.log(cart![0].totalQuantity)
  }
  
  const removeFromCart = (product:Product) => {
    const id = product.id;
    const existingItem = cart![0].products.find((product) => {
      return product.id === id;
    });
    cart![0].totalQuantity--;
    if (existingItem!.totalQuantity === 1) {
      cart![0].products = cart![0].products.filter((item) => {
        return item.id !== id;
      });
    } else {
       existingItem!.totalQuantity-- 
      existingItem!.totalPrice = existingItem!.totalPrice - existingItem!.price
    }
  }

  return <section  className={styles["product"]}>
    <Link to={`/${product.id}`} className={styles["product__image"]}>
        <img src={product.photo} alt={product.name} className={styles["product__image--photo"]}/>
    </Link>
    <div className={styles["product__info"]}>
        <h1 className={styles["product__info--name"]}>{product.name}</h1>
        <h3 className={styles["product__info--price"]}>{`Price: $${product?.price}`} </h3>
        <button className={styles["product__info--button"]} onClick={addToCart}>Add to Cart</button>
    </div>
  </section>;
};

export default ProductItem;
