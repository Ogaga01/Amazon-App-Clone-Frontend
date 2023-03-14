import React, { FC, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import background from "./../images/Amazon-homepage.jpg";
import styles from "./../sass/_homepage.module.scss";
import { useAppSelector } from "../redux/index";

const Homepage: FC = () => {
  const [isAdmin, setIsAdmin] = useState<boolean>(false);

  const user = useAppSelector((state) => {
    return state.loginSlice.user;
  });

  useEffect(() => {
    if (user !== null && user.role === "admin") {
      setIsAdmin(true);
    }
  }, [user]);

  return (
    <section className={styles["homepage"]}>
      <div className={styles["homepage__background"]}>
        <img
          src={background}
          alt="background img"
          className={styles["homepage__background--image"]}
        />
      </div>
      <div className={styles["homepage__products"]}>
        <div className={styles["homepage__products--product"]}>
          <div className={styles["homepage__products--image"]}>
            <img src="j" alt="j" />
          </div>
          <div className={styles["homepage__products--info"]}>
            <Link className={styles["homepage__products--name"]} to="j">
              'j'
            </Link>
            <p className={styles["homepage__products--price"]}>j</p>
            <button
              type="button"
              className={styles["homepage__products--button"]}
            >
              Add to cart
            </button>
            {isAdmin && (
              <button
                type="button"
                className={styles["homepage__products--button"]}
              ></button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Homepage;
