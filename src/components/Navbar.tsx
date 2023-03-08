import React, { FC, useState } from 'react';
import { GrLocation, GrSearch } from "react-icons/gr";
import {NavLink} from 'react-router-dom'
import amazon from './../images/amazon-icon.png'
import usa from './../images/america-flag.png'
import styles from './../sass/_navbar.module.scss'

const Navbar: FC = () => {
    const [showAccountDetails, setShowAccountDetails] = useState<boolean>(false);

    const handleHover = () => {
      setShowAccountDetails(true);
    };

    const handleLeave = () => {
      setShowAccountDetails(false);
    };

    return (
      <section className={styles["nav"]}>
        <div className={styles["nav__image"]}>
          <img
            src={amazon}
            alt="Amazon Icon"
            className={styles["nav__image--img"]}
          />
        </div>
        <div className={styles["nav__delivery"]}>
          <GrLocation className={styles["nav__delivery--icon"]} />
          <div className={styles["nav__para"]}>
            <p className={styles["nav__para--thin"]}>Deliver to</p>
            <br />
            <p className={styles["nav__para--bold"]}>Nigeria</p>
          </div>
        </div>
        <div className={styles["nav__search"]}>
          <input type="text" className={styles["nav__search--input"]} />
          <div className={styles["nav__search--icon"]}>
            <GrSearch />
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
        <NavLink to="Account">
          <div
            className={styles["nav__account"]}
            onMouseOver={handleHover}
            onMouseLeave={handleLeave}
          >
            <div className={styles["nav__para"]}>
              <p className={styles["nav__para--thin"]}>Hello, sign in</p>
              <br />
              <p className={styles["nav__para--bold"]}>Account & Lists</p>
            </div>
            <div className={styles["nav__triangle"]}></div>
            {showAccountDetails && (
              <div className={styles["nav__account--details"]}>
                <h1 className={styles["nav__account--heading"]}>
                  Your Account
                </h1>
                <ul className={styles["nav__account--list"]}>
                  <li className={styles["nav__account--item"]}>
                    <NavLink to="Account">Account</NavLink>
                  </li>
                  <li className={styles["nav__account--item"]}>
                    <NavLink to="Order">Order</NavLink>
                  </li>
                  <li className={styles["nav__account--item"]}>
                    Sign out
                  </li>
                </ul>
              </div>
            )}
          </div>
        </NavLink>
        <NavLink to="Orders">
          <div className={styles["nav__orders"]}>
            <div className={styles["nav__para"]}>
              <p className={styles["nav__para--thin"]}>Returns</p>
              <br />
              <p className={styles["nav__para--bold"]}>& Orders</p>
            </div>
          </div>
        </NavLink>
        <NavLink to="Cart">
          <div className={styles["nav__cart"]}>
            <p className={styles["nav__cart--img"]}>0</p>
            <p className={styles["nav__cart--para"]}>Cart</p>
          </div>
        </NavLink>
      </section>
    );
};

export default Navbar;