import React, { FC, useState } from "react";
import styles from "./../sass/_managepassword.module.scss";
import { updatePassword } from '../redux/actions/passwordAction';
import { useAppSelector } from '../redux/index';

const ManagePassword: FC = () => {
  const [password, setPassword] = useState<string>("");
  const [newpassword, setNewPassword] = useState<string>("");
  const [newPasswordConfirm, setNewPasswordConfirm] = useState<string>("");

  const user = useAppSelector((state) => {
    return state.loginSlice.user
  })

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleNewPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewPassword(e.target.value);
  };

  const handleNewPasswordConfirm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewPasswordConfirm(e.target.value);
  };

  const updateUserPassword = () => {
    if (user !== null) {
      const token = user.token;
        
      (updatePassword(token, password, newpassword, newPasswordConfirm))
    }
  }

  return (
    <section className={styles["password"]}>
      <label className={styles["password__label"]} htmlFor="currentPassword">
        Current Password
      </label>
      <input
        className={styles["password__input"]}
        id="currentPassword"
        type="text"
        value={password}
        onChange={handlePassword}
      />
      <label className={styles["password__label"]} htmlFor="newPassword">
        New Password
      </label>
      <input
        className={styles["password__input"]}
        id="newPassword"
        type="text"
        value={newpassword}
        onChange={handleNewPassword}
      />
      <label className={styles["password__label"]} htmlFor="confirmNewPassword">
        Confirm New Password
      </label>
      <input
        className={styles["password__input"]}
        id="confirmNewPassword"
        type="text"
        value={newPasswordConfirm}
        onChange={handleNewPasswordConfirm}
      />
      <button type="button" className={styles["password__button"]} onClick={updateUserPassword}>
        Update Password
      </button>
    </section>
  );
};

export default ManagePassword;
