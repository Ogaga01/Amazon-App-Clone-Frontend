import React, { FC, useState } from "react";
import styles from "./../sass/_manageproducts.module.scss";
import { useAppDispatch, useAppSelector } from "../redux";
import { editCurrentUser } from "../redux/actions/userActions";

const ManageMe: FC = () => {
  let [name, setName] = useState<string>("");
  let [email, setEmail] = useState<string>("");

  const user = useAppSelector((state) => {
    return state.loginSlice.user;
  });

  const cart = useAppSelector((state) => {
    return state.loginSlice.user?.cart;
  });

  const dispatch = useAppDispatch();

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const editUser = () => {
    if (user !== null) {
      if (name === "") {
        name = user.name;
      }
      if (email === "") {
        email = user.email;
      }
      dispatch(editCurrentUser(user.token, name, email, cart!));
    }
    setName("");
    setEmail("");
  };

  return (
    <section className={styles["products"]}>
      <div className={styles["products__add"]}>
        <h1 className={styles["products__add--heading"]}>Edit User Info</h1>
        <div className={styles["products__add--form"]}>
          <label htmlFor="name" className={styles["products__add--label"]}>
            Name
          </label>
          <input
            type="text"
            className={styles["products__add--input"]}
            id="name"
            name="name"
            value={name}
            onChange={handleName}
          />
          <label htmlFor="email" className={styles["products__add--label"]}>
            Email
          </label>
          <input
            type="text"
            className={styles["products__add--input"]}
            id="email"
            name="email"
            value={email}
            onChange={handleEmail}
          />
          <button
            type="button"
            className={styles["products__add--button"]}
            onClick={editUser}
          >
            Submit
          </button>
        </div>
      </div>
    </section>
  );
};

export default ManageMe;
