import React, { FC } from "react";
import { Cart, Product } from "../type";
import styles from "./../sass/_productitem.module.scss";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux";
import { editCurrentUser } from "../redux/actions/userActions";

interface Props {
  product: Product;
}

const ProductItem: FC<Props> = ({ product }) => {
  const cart = useAppSelector((state) => {
    return state.loginSlice.user?.cart;
  });

  const user = useAppSelector((state) => {
    return state.loginSlice.user;
  });

  const dispatch = useAppDispatch();

  const carts: Cart = {
    products: [product.id],
    totalPrice: product.price,
    totalQuantity: 1,
  };
  const addToCart = () => {
    if (cart?.length! <= 0) {
      console.log(cart, cart?.length);
      dispatch(
        editCurrentUser(user?.token!, user?.name!, user?.email!, [carts])
      );
    } else {
      const carts = [...cart!];
      console.log(carts);
      carts![0].products.push(product.id);
      carts![0].totalPrice = carts[0].totalPrice + product.price;
      carts![0].totalQuantity++;
      console.log(cart);
      dispatch(
        editCurrentUser(user?.token!, user?.name!, user?.email!, carts!)
      );
    }
  };

  // const addToCart = () => {
  //   if (cart?.length === 0) {
  //     const carts: Cart = {
  //       products: [product.id],
  //       totalPrice: product.price,
  //       totalQuantity: 1,
  //     };
  //     cart!.push(carts);
  //   } else {
  //     cart![0].products.push(product.id);
  //     cart![0].totalPrice = cart![0].totalPrice + product.price;
  //     cart![0].totalQuantity++;
  //   }
  // };

  return (
    <section className={styles["product"]}>
      <Link to={`/${product.id}`} className={styles["product__image"]}>
        <img
          src={product.photo}
          alt={product.name}
          className={styles["product__image--photo"]}
        />
      </Link>
      <div className={styles["product__info"]}>
        <h1 className={styles["product__info--name"]}>{product.name}</h1>
        <h3 className={styles["product__info--price"]}>
          {`Price: $${product.price}`}{" "}
        </h3>
        <button className={styles["product__info--button"]} onClick={addToCart}>
          Add to Cart
        </button>
      </div>
    </section>
  );
};

export default ProductItem;
