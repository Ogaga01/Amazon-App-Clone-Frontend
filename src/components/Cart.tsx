import React, { FC } from "react";
import { useAppDispatch, useAppSelector } from "../redux";
import bg from "./../images/looking.png";
import CartItem from "./CartItem";
import { Cart, Product } from "../type";
import styles from "./../sass/_cart.module.scss";
import { Link } from "react-router-dom";
import { editCurrentUser } from "../redux/actions/userActions";

const Carts: FC = () => {
  let cart = useAppSelector((state) => {
    return state.loginSlice.user?.cart;
  });

  const user = useAppSelector((state) => {
    return state.loginSlice.user;
  });

  const dispatch = useAppDispatch();

  console.log(cart);
  const deleteAllCartItems = () => {
    const carts: Cart = {
      products: [],
      totalPrice: 0,
      totalQuantity: 0,
    };

    dispatch(editCurrentUser(user?.token!, user?.name!, user?.email!, [carts]));
  };

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
          <h3
            className={styles["cart__product--delete"]}
            onClick={deleteAllCartItems}
          >
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
          Subtotal: {cart![0] ? `$${cart![0].totalPrice}` : "$0.0"}
        </h3>
        <div className={styles["cart--form"]}>
          <input
            className={styles["cart--input"]}
            type="checkbox"
            id="gift"
            name="gift"
            value="Gift"
          />
          <label htmlFor="gift" className={styles["cart--label"]}>
            This cart contains a gift
          </label>
        </div>
        <Link
          to="https://docs.google.com/document/d/1qFzZ41ulkY1H1wA4-e5KH_72SAY_n1FsvedcsLidHjs/edit?usp=sharing"
          target="blank"
          className={styles["cart__aggregate--button"]}
        >
          Proceed to checkout
        </Link>
      </div>
    </section>
  );
};

export default Carts;
