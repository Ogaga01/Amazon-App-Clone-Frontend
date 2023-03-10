import React, { FC } from 'react';
import styles from './../sass/_orders.module.scss'

const Orders: FC = () => {
    return (
        <section className={styles['orders']}>
            <h2 className={styles['orders__heading']}>Your Orders</h2>
            <p className={styles['orders__para']}>Currently no Orders</p>
        </section>
    );
};

export default Orders;