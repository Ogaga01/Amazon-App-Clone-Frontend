import React, { FC } from "react";
import { Product } from "../type";
import { Link } from "react-router-dom";
import styles from './../sass/_cartitem.module.scss'

interface Props {
    product: Product;
  }

const CartItem: FC<Props> = ({product}) => {
  return <section className={styles['item']}>
    <div className={styles['item__image']}>
        <img className={styles['item__image--photo']} src={product.photo} alt={product.name}/>
    </div>
    <div className={styles['item__info']}>
        <div className={styles['item__info--details']}>
            <h1 className={styles['item__info__name']}>{product.name}</h1>
            <div className={styles['item__info--form']}>
                <input type="checkbox" id="gift" name="gift" value="Gift"/>
                <label htmlFor="gift">This is a gift</label>
                <Link to='https://www.linkedin.com/in/ogaga-iyara' target="blank">Learn More</Link>
            </div>
        </div>
        <div className={styles['item__info--price']}>{product.price}</div>
    </div>
  </section>;
};

export default CartItem;
