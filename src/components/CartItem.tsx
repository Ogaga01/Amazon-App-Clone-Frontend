import React, { FC } from "react";
import { Cart, Product } from "../type";
import { Link } from "react-router-dom";
import styles from "./../sass/_cartitem.module.scss";
import { useAppDispatch, useAppSelector } from "../redux";
import { editCurrentUser } from "../redux/actions/userActions";

interface Props {
  product: Product;
}

const CartItem: FC<Props> = ({ product }) => {
  const products = useAppSelector((state) => {
    return state.loginSlice.user?.cart![0].products;
  });

  const cart = useAppSelector((state) => {
    return state.loginSlice.user?.cart![0];
  });

  const user = useAppSelector((state) => {
    return state.loginSlice.user;
  });

  const dispatch = useAppDispatch();

  const deleteProduct = () => {
    const carts: Cart = {
      products: products?.filter((products: Product, i) => {
        return products.id !== product.id;
      }),
      totalPrice: cart?.totalPrice! - product.price,
      totalQuantity: cart?.totalQuantity! - 1,
    };

    dispatch(editCurrentUser(user?.token!, user?.name!, user?.email!, [carts]));
  };

  return (
    <div className={styles["items"]}>
      <section className={styles["item"]}>
        <div className={styles["item__image"]}>
          <img
            className={styles["item__image--photo"]}
            src={product.photo}
            alt={product.name}
          />
        </div>
        <div className={styles["item__info"]}>
          <div className={styles["item__info--details"]}>
            <h1 className={styles["item__info--name"]}>{product.name}</h1>
            <div className={styles["item__info--form"]}>
              <input
                className={styles["item__info--input"]}
                type="checkbox"
                id="gift"
                name="gift"
                value="Gift"
              />
              <label htmlFor="gift" className={styles["item__info--label"]}>
                This is a gift
              </label>
              <Link
                to="https://github.com/Ogaga01"
                target="blank"
                className={styles["item__info--link"]}
              >
                Learn More
              </Link>
            </div>
            <p className={styles["item__info--delete"]} onClick={deleteProduct}>
              Delete
            </p>
          </div>
          <div className={styles["item__info--price"]}>{`$${product?.price}`}</div>
        </div>
      </section>
      <div className={styles["item__hr"]}></div>
    </div>
  );
};

export default CartItem;
