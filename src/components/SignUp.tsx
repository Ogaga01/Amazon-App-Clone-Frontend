import React, { FC, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import amazon from "./../images/amazon-logo-dark.png";
import styles from "./../sass/_login.module.scss";
import { signUpUser } from "../redux/actions/signupAction";
import { useAppDispatch, useAppSelector } from "../redux/index";
import { useCookies } from "react-cookie";

const SignUp: FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordconfirm, setPasswordConfirm] = useState<string>("");
  const [cookies, setCookie] = useCookies(["jwt"]);

  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const user = useAppSelector((state) => {
    return state.loginSlice.user;
  });

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handlePasswordConfirm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordConfirm(e.target.value);
  };

  const handleSignupUser = () => {
    console.log("creating", name, password, email);
    dispatch(signUpUser(name, email, password, passwordconfirm));
  };

  useEffect(() => {
    if (user !== null && user.status === "success") {
      const token = user.token;

      setCookie("jwt", token, {
        path: "/",
        expires: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000),
        secure: true,
      });

      navigate("/");
    }
  }, [user, navigate, cookies, setCookie]);

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
        <label htmlFor="name" className={styles["login__form--label"]}>
          Name
        </label>
        <input
          id="name"
          type="text"
          className={styles["login__form--input"]}
          onChange={handleName}
          value={name}
        />
        <label htmlFor="email" className={styles["login__form--label"]}>
          Email
        </label>
        <input
          id="email"
          type="text"
          className={styles["login__form--input"]}
          onChange={handleEmail}
          value={email}
        />
        <label htmlFor="password" className={styles["login__form--label"]}>
          Password
        </label>
        <input
          id="password"
          type="password"
          className={styles["login__form--input"]}
          onChange={handlePassword}
          value={password}
        />
        <label
          htmlFor="passwordconfirm"
          className={styles["login__form--label"]}
        >
          Confirm Password
        </label>
        <input
          id="passwordconfirm"
          type="password"
          className={styles["login__form--input"]}
          onChange={handlePasswordConfirm}
          value={passwordconfirm}
        />
        <button
          type="button"
          className={styles["login__form--button"]}
          onClick={handleSignupUser}
        >
          Sign Up
        </button>
        <p className={styles["login__form--para"]}>
          By continuing, you agree to Ogaga's Amazon Clone Conditions of Use and
          Privacy Notice.
        </p>
      </div>
      <div className={styles["login__hr"]}></div>
      <p className={styles["login__para"]}>
        Already have an account?{" "}
        <NavLink to="/Login" className={styles["login__para--signup"]}>
          Proceed to login
        </NavLink>
      </p>
    </section>
  );
};

export default SignUp;
