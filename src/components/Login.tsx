import React, { FC, useState } from 'react';
import { fetchUser } from '../redux/actions/loginAction';
import { NavLink, useNavigate } from 'react-router-dom';
import amazon from './../images/amazon-logo-dark.png'
import styles from './../sass/_login.module.scss'
import { useAppDispatch, useAppSelector } from '../redux/index';

const Login: FC = () => {
    const [emailValue, setEmailValue] = useState<string>('')
    const [passwordValue, setPasswordValue] = useState<string>("");
    const navigate = useNavigate()

    const user = useAppSelector((state) => {
        return state.loginSlice.user
    })

    const handleEmailInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmailValue(e.target.value)
    }

    const handlePasswordInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPasswordValue(e.target.value)
    }

    const dispatch = useAppDispatch()

    const handleFetchUser = () => {
        dispatch(fetchUser(emailValue, passwordValue))
        console.log(user, 'fetch')
        if (user !== null) {
            console.log(user)
            navigate("/Account");
        }
    }
    

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
          <h1 className={styles["login__form--heading"]}>Sign In</h1>
          <label htmlFor="email" className={styles["login__form--label"]}>
            Email
          </label>
          <input
            id="email"
                    type="text"
                    value={emailValue}
                    onChange={handleEmailInput}
            className={styles["login__form--input"]}
          />
          <label htmlFor="password" className={styles["login__form--label"]}>
            Password
          </label>
          <input
            id="password"
                    type="password"
                    value={passwordValue}
                    onChange={handlePasswordInput}
            className={styles["login__form--input"]}
          />
          <button type="button" className={styles["login__form--button"]} onClick={handleFetchUser} > 
            Sign In
          </button>
          <p className={styles["login__form--para"]}>
            By continuing, you agree to Ogaga's Amazon Clone Conditions of Use
            and Privacy Notice.
          </p>
        </div>
        <div className={styles["login__hr"]}></div>
        <p className={styles["login__para"]}>
          New to Amazon Clone?{" "}
          <NavLink to="SignUp" className={styles["login__para--signup"]}>
            Create an account
          </NavLink>
        </p>
      </section>
    );
};

export default Login;
