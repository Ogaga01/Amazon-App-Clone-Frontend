import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { GrDeliver } from 'react-icons/gr'
import { HiShieldCheck } from 'react-icons/hi'
import styles from './../sass/_account.module.scss'

const Account: FC = () => {
    return (
      <section className={styles["account"]}>
        <NavLink to='/Orders' className={styles["account__div"]}>
          <div className={styles["account__div--img"]}>
            <GrDeliver className={styles["account__div--icon"]} />
          </div>
          <div className={styles["account__div--text"]}>
            <h2 className={styles["account__div--heading"]}>Your Orders</h2>
            <p className={styles["account__div--para"]}>
              Track, return, cancel an order, download invoice or buy again
            </p>
          </div>
        </NavLink>
        <NavLink to='/ManageAccount' className={styles["account__div"]}>
          <div className={styles["account__div--img"]}>
            <HiShieldCheck className={styles["account__div--icon"]} />
          </div>
          <div className={styles["account__div--text"]}>
            <h2 className={styles["account__div--heading"]}>Settings & Security</h2>
            <p className={styles["account__div--para"]}>
              Edit account details; name, password, email.
            </p>
          </div>
        </NavLink>
      </section>
    );
};

export default Account;