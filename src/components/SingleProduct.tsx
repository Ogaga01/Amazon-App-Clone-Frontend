import React, { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux";
import { useParams } from "react-router-dom";
import { fetchSingleProduct } from "../redux/actions/productsAction";
import styles from './../sass/_singleproduct.module.scss'

const SingleProduct: FC = () => {
const product = useAppSelector((state)=>{
    return state.singleProductSlice.product
})

const dispatch = useAppDispatch()
const params = useParams();

  useEffect(() => {
    dispatch(fetchSingleProduct(params.id!));
    console.log(params.id);
  }, [dispatch, params.id]);

  return <section className={styles["singleprod"]}>
    <div className={styles["singleprod__image"]}>
        <img src={product?.id} alt={product?.name} className={styles["singleprod__image--photo"]}/>
    </div>
    <div className={styles["singleprod__info"]}>
        <h1 className={styles["singleprod__info--name"]}>{product?.name}</h1>
        <h3 className={styles["singleprod__info--price"]}>{product?.price} </h3>
        <button className={styles["singleprod__info--button"]}>Add to Cart</button>
    </div>
  </section>;
};

export default SingleProduct;
