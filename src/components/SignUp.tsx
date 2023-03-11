import React, { FC } from 'react';
import { NavLink } from "react-router-dom";
import amazon from "./../images/amazon-logo-dark.png";
import styles from "./../sass/_login.module.scss";

const SignUp: FC = () => {
    return (
      <section className={styles["login"]}>
        <NavLink to="/" className={styles["login__amazon"]}>
          <img
            src={amazon}
            alt="Amazon Icon"
            className={styles["login__amazon--img"]}
          />
        </NavLink>
        <div className={styles["login__form"]}>
          <h1 className={styles["login__form--heading"]}>Sign Up</h1>
          <label htmlFor="email" className={styles["login__form--label"]}>
            Email
          </label>
          <input
            id="email"
            type="text"
            className={styles["login__form--input"]}
          />
          <label htmlFor="password" className={styles["login__form--label"]}>
            Password
          </label>
          <input
            id="password"
            type="password"
            className={styles["login__form--input"]}
          />
          <label htmlFor="passwordconfirm" className={styles["login__form--label"]}>
            Confirm Password
          </label>
          <input
            id="passwordconfirm"
            type="password"
            className={styles["login__form--input"]}
          />
          <button type="button" className={styles["login__form--button"]}>
            Sign Up
          </button>
          <p className={styles["login__form--para"]}>
            By continuing, you agree to Ogaga's Amazon Clone Conditions of Use
            and Privacy Notice.
          </p>
        </div>
        <div className={styles["login__hr"]}></div>
        <p className={styles["login__para"]}>
          Already have an account?{" "}
          <NavLink to="Login" className={styles["login__para--signup"]}>
            Proceed to login
          </NavLink>
        </p>
      </section>
    );
};

export default SignUp;