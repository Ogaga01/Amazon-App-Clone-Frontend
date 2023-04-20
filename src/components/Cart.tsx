import React, { FC } from "react";
import { useAppSelector } from "../redux";
import bg from "./../images/looking.png";
import CartItem from "./CartItem";
import { Product } from "../type";
import styles from "./../sass/_cart.module.scss";
import { Link } from "react-router-dom";

const Cart: FC = () => {
  let cart = useAppSelector((state) => {
    return state.loginSlice.user?.cart;
  });

  console.log(cart);

  return (
    <section className={styles["cart"]}>
      <div className={styles["cart__product"]}>
        <Link
          to="https://www.linkedin.com/in/ogaga-iyara"
          className={styles["cart__product--image"]}
        >
          <img
            src={bg}
            alt="background"
            className={styles["cart__product--img"]}
          />
        </Link>
        <div className={styles["cart__product--title"]}>
          <h1 className={styles["cart__product--heading"]}>Shopping Cart</h1>
          <h3 className={styles["cart__product--delete"]}>
            Delete all items from cart
          </h3>
          <div className={styles["cart__hr"]}></div>
        </div>
        <div className={styles["cart__products"]}>
          {cart![0].products!.map((product: Product) => {
            return <CartItem key={product.id} product={product} />;
          })}
        </div>
      </div>
      <div className={styles["cart__aggregate"]}>
        <h3 className={styles["cart__aggregate--heading"]}>
          Subtotal: {cart![0] ? cart![0].totalPrice : 0}
        </h3>
        <button className={styles["cart__aggregate--button"]}>
          Proceed to checkout
        </button>
      </div>
    </section>
  );
};

export default Cart;
