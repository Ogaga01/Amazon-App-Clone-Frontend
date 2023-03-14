import React, { FC } from "react";
import { Link } from "react-router-dom";
import styles from './../sass/_homepage.module.scss'

const Homepage: FC = () => {
  return (
    <section className={styles["homepage"]}>
      <div className={styles["homepage__background"]}></div>
      <div className={styles["homepage__products"]}>
        <div className={styles["homepage__products--product"]}>
          <div className={styles["homepage__products--image"]}>
            <img src='j' alt='j' />
          </div>
          <div className={styles["homepage__products--info"]}>
            <Link className={styles["homepage__products--name"]} to='j'>
              'j'
            </Link>
            <p className={styles["homepage__products--price"]}>j</p>
            <button
              type="button"
              className={styles["homepage__products--button"]}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Homepage;
