import React, { FC, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux";
import { NavLink, useParams } from "react-router-dom";
import {
  deleteSingleProduct,
  fetchSingleProduct,
} from "../redux/actions/productsAction";
import styles from "./../sass/_singleproduct.module.scss";
import { editCurrentUser } from "../redux/actions/userActions";
import { Cart } from "../type";

const SingleProduct: FC = () => {
  const [isAdmin, setIsAdmin] = useState<boolean>(false);

  const user = useAppSelector((state) => {
    return state.loginSlice.user;
  });

  const cart = useAppSelector((state) => {
    return state.loginSlice.user?.cart;
  });

  useEffect(() => {
    if (user !== null && user.role === "admin") {
      setIsAdmin(true);
    }
  }, [user]);

  const product = useAppSelector((state) => {
    return state.singleProductSlice.product;
  });

  const dispatch = useAppDispatch();
  const params = useParams();

  useEffect(() => {
    dispatch(fetchSingleProduct(params.id!));
    console.log(params.id);
  }, [dispatch, params.id]);

  const deleteProduct = () => {
    if (user !== null && user.role === "admin") {
      const token = user.token;

      deleteSingleProduct(params.id!, token);
    }
  };

  const carts: Cart = {
    products: [product!.id],
    totalPrice: product!.price,
    totalQuantity: 1,
  };
  const addToCart = () => {
    if (cart?.length! <= 0) {
      console.log(cart, cart?.length);
      dispatch(
        editCurrentUser(user?.token!, user?.name!, user?.email!, [carts])
      );
    } else {
      const carts = JSON.parse(JSON.stringify(cart));
      console.log(carts![0]);
      const existingProduct = cart![0].products?.find((products) => {
        return products.id === product!.id;
      });
      if (existingProduct) return;
      carts![0].products.push(product!.id);
      carts![0].totalPrice = carts![0].totalPrice + product!.price;
      carts![0].totalQuantity++;
      console.log(cart);
      dispatch(
        editCurrentUser(user?.token!, user?.name!, user?.email!, carts!)
      );
    }
  };

  return (
    <section className={styles["singleprod"]}>
      <div className={styles["singleprod__image"]}>
        <img
          src={product?.photo}
          alt={product?.name}
          className={styles["singleprod__image--photo"]}
        />
      </div>
      <div className={styles["singleprod__info"]}>
        <h1 className={styles["singleprod__info--name"]}>{product?.name}</h1>
        <p className={styles["singleprod__info--description"]}>
          {product?.description}
        </p>
        <h3 className={styles["singleprod__info--price"]}>
          {`Price: $${product?.price}`}{" "}
        </h3>
        <button className={styles["singleprod__info--button"]} onClick={addToCart}>
          Add to Cart
        </button>
        {isAdmin && (
          <>
            <NavLink
              to="/EditProduct"
              className={styles["singleprod__info--button"]}
            >
              Edit Product
            </NavLink>
            <button
              className={styles["singleprod__info--button"]}
              onClick={deleteProduct}
            >
              Delete Product
            </button>
          </>
        )}
      </div>
    </section>
  );
};

export default SingleProduct;
