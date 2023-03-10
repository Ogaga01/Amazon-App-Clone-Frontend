import React, { FC, useState } from "react";
import { HiOutlineLocationMarker, HiSearch } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import amazon from "./../images/amazon-icon.png";
import usa from "./../images/america-flag.png";
import styles from "./../sass/_navbar.module.scss";
import cart from "./../images/cart.png";

const Navbar: FC = () => {
  const [showAccountDetails, setShowAccountDetails] = useState<boolean>(false);

  const handleHover = () => {
    setShowAccountDetails(true);
  };

  const handleLeave = () => {
    setShowAccountDetails(false);
  };

  return (
    <>
      <section className={styles["nav"]}>
        <NavLink to='/' className={styles["nav__image"]}>
          <img
            src={amazon}
            alt="Amazon Icon"
            className={styles["nav__image--img"]}
          />
        </NavLink>
        <div className={styles["nav__delivery"]}>
          <HiOutlineLocationMarker className={styles["nav__delivery--icon"]} />
          <div className={styles["nav__para"]}>
            <p className={styles["nav__para--thin"]}>Deliver to</p>
            <br />
            <h1 className={styles["nav__para--bold"]}>Nigeria</h1>
          </div>
        </div>
        <div className={styles["nav__search"]}>
          <input type="text" className={styles["nav__search--input"]} />
          <div className={styles["nav__search--icon"]}>
            <HiSearch className={styles["nav__search--search"]} />
          </div>
        </div>
        <div className={styles["nav__language"]}>
          <img
            src={usa}
            alt="American Flag"
            className={styles["nav__language--flag"]}
          />
          <p className={styles["nav__language--name"]}>EN.</p>
        </div>
        <NavLink
          className={styles["nav__account"]}
          onMouseOver={handleHover}
          onMouseLeave={handleLeave}
          to="Account"
        >
          <div className={styles["nav__para"]}>
            <p className={styles["nav__para--thin"]}>Hello, sign in</p>
            <br />
            <h1 className={styles["nav__para--bold"]}>Account & Lists</h1>
          </div>
          <div className={styles["nav__triangle"]}></div>
        </NavLink>
        <NavLink className={styles["nav__orders"]} to="Orders">
          <div className={styles["nav__para"]}>
            <p className={styles["nav__para--thin"]}>Returns</p>
            <br />
            <p className={styles["nav__para--bold"]}>& Orders</p>
          </div>
        </NavLink>
        <NavLink className={styles["nav__cart"]} to="Cart">
          <div className={styles["nav__cart--div"]}>
            <p className={styles["nav__cart--p"]}>0</p>
            <img
              src={cart}
              alt="Amazon Cart"
              className={styles["nav__cart--img"]}
            />
          </div>
          <p className={styles["nav__cart--para"]}>Cart</p>
        </NavLink>
      </section>
      {showAccountDetails && (
        <div
          className={styles["nav__account--details"]}
          onMouseOver={handleHover}
          onMouseLeave={handleLeave}
        >
          <h1 className={styles["nav__account--heading"]}>Your Account</h1>
          <ul className={styles["nav__account--list"]}>
            <li className={styles["nav__account--item"]}>
              <NavLink to="Account" className={styles["nav__account--items"]}>Account</NavLink>
            </li>
            <li className={styles["nav__account--item"]}>
              <NavLink to="Orders" className={styles["nav__account--items"]}>Order</NavLink>
            </li>
            <li className={styles["nav__account--items"]}>Sign out</li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
