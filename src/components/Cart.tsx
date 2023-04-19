import React, { FC } from "react";
import { useAppSelector } from "../redux";
import bg from "./../images/looking.png";
import CartItem from "./CartItem";
import { Product } from "../type";
import styles from "./../sass/_cart.module.scss";

const Cart: FC = () => {
  const products = useAppSelector((state) => {
    return state.loginSlice.user?.cart[0].products;
  });

  console.log(products);
  let isObj = true;

  if (typeof(products![0]) === 'string') {
    isObj = false
  }

  return (
    <section className={styles["cart"]}>
      <div className={styles["cart__product"]}>
        <div className={styles["cart__product--image"]}>
          <img
            src={bg}
            alt="background"
            className={styles["cart__product--img"]}
          />
        </div>
        <div className={styles["cart__product--title"]}>
          <h1 className={styles["cart__product--heading"]}>Shopping Cart</h1>
          <h3 className={styles["cart__product--delete"]}>
            Delete all items from cart
          </h3>
        </div>
        <div className={styles["cart__products"]}>
          {
            products!.map
          }
        </div>
      </div>
      <div className={styles["cart__aggregate"]}></div>
    </section>
  );
};

export default Cart;
