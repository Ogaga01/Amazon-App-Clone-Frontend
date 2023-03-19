import React, { FC, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useAppSelector } from "../redux/index";
import styles from './../sass/_manageaccount.module.scss'

const ManageAccount: FC = () => {
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
    <section className={styles["manage"]}>
      <NavLink className={styles["manage__button"]} to="/ManagePassword">
        Manage My Password
      </NavLink>
      <NavLink className={styles["manage__button"]} to="/ManageMe">
        Manage Other Details
      </NavLink>
      {isAdmin && (
        <>
          <NavLink className={styles["manage__button"]} to="/ManageUser">
            Manage Users
          </NavLink>
          <NavLink className={styles["manage__button"]} to="/ManageProducts">
            Manage Products
          </NavLink>
        </>
      )}
    </section>
  );
};

export default ManageAccount;
