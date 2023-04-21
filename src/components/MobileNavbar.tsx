import React, { FC, useEffect, useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineUser,
  AiOutlineClose,
} from "react-icons/ai";
import { NavLink } from "react-router-dom";
import amazon from "./../images/amazon-icon.png";
import cart from "./../images/cart.png";
import styles from "./../sass/_mobileNavbar.module.scss";
import { useAppSelector } from "../redux";

const MobileNavbar: FC = () => {
  const [showSlider, setShowSlider] = useState<boolean>(false);

  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const user = useAppSelector((state) => {
    return state.loginSlice.user;
  });

  useEffect(() => {
    if (user !== null) {
      setIsLoggedIn(true);
    }
  }, [user]);

  const sliderOpen = () => {
    setShowSlider(true);
  };

  const sliderClose = () => {
    setShowSlider(false);
  };

  return (
    <>
      <section className={styles["mobileNav"]}>
        <div className={styles["mobileNav__info"]}>
          <div className={styles["mobileNav__info--left"]}>
            <AiOutlineMenu
              className={styles["mobileNav__info--menu"]}
              onClick={sliderOpen}
            />
            <NavLink to="/" className={styles["mobileNav__info--amazonDiv"]}>
              <img
                src={amazon}
                alt="Amazon Icon"
                className={styles["mobileNav__info--amazon"]}
              />
            </NavLink>
          </div>
          <div className={styles["mobileNav__info--right"]}>
            <div className={styles["mobileNav__info--user"]}>
              <AiOutlineUser className={styles["mobileNav__info--icon"]} />
              <p className={styles["mobileNav__info--name"]}>
                {!isLoggedIn ? "User" : user?.name}
              </p>
            </div>
            <NavLink to="/Cart" className={styles["mobileNav__cart--cart"]}>
              <div className={styles["mobileNav__cart--div"]}>
                <p className={styles["mobileNav__cart--p"]}>
                  {user?.cart.length!>0? user?.cart[0].products!.length : 0}
                </p>
                <img
                  src={cart}
                  alt="Amazon Cart"
                  className={styles["mobileNav__cart--img"]}
                />
              </div>
            </NavLink>
          </div>
        </div>
        <div className={styles["mobileNav__search"]}>
          <input type="text" className={styles["mobileNav__search--input"]} />
          <div className={styles["mobileNav__search--icon"]}>
            <AiOutlineSearch className={styles["mobileNav__search--search"]} />
          </div>
        </div>
      </section>
      {showSlider && (
        <section className={styles["mobileNav__slider"]}>
          <div className={styles["mobileNav__slider--nav"]}>
            <div className={styles["mobileNav__slider--header"]}>
              <div className={styles["mobileNav__slider--user"]}>
                <p className={styles["mobileNav__slider--name"]}>User</p>
                <AiOutlineUser className={styles["mobileNav__slider--icon"]} />
              </div>
              <div className={styles["mobileNav__slider--title"]}>Amazon</div>
            </div>
            <ul className={styles["mobileNav__slider--list"]}>
              <li>
                {!isLoggedIn ? (
                  <NavLink
                    to="/Login"
                    className={styles["mobileNav__slider--item"]}
                    onClick={sliderClose}
                  >
                    Account
                  </NavLink>
                ) : (
                  <NavLink
                    to="/Account"
                    className={styles["mobileNav__slider--item"]}
                    onClick={sliderClose}
                  >
                    Account
                  </NavLink>
                )}
              </li>
              <li>
                <NavLink
                  to="/Orders"
                  className={styles["mobileNav__slider--item"]}
                  onClick={sliderClose}
                >
                  Order
                </NavLink>
              </li>
              <li
                className={styles["mobileNav__slider--item"]}
                onClick={sliderClose}
              >
                Sign out
              </li>
            </ul>
          </div>
          <div className={styles["mobileNav__slider--close"]}>
            <AiOutlineClose
              className={styles["mobileNav__slider--x"]}
              onClick={sliderClose}
            />
          </div>
        </section>
      )}
    </>
  );
};

export default MobileNavbar;
