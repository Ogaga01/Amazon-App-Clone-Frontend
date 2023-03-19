import React, { FC, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import styles from "./../sass/_managepassword.module.scss";
import { updatePassword } from "../redux/actions/passwordAction";
import { useAppSelector } from "../redux/index";
import { useNavigate } from "react-router";

const ManagePassword: FC = () => {
  const [password, setPassword] = useState<string>("");
  const [newpassword, setNewPassword] = useState<string>("");
  const [newPasswordConfirm, setNewPasswordConfirm] = useState<string>("");
  const [passwordType, setPasswordType] = useState<string>("password");

  let user = useAppSelector((state) => {
    return state.loginSlice.user;
  });

  const navigate = useNavigate();

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleNewPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewPassword(e.target.value);
  };

  const handleNewPasswordConfirm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewPasswordConfirm(e.target.value);
  };

  const handlePasswordType = () => {
    setPasswordType("text");
  };

  const resetHandlePasswordType = () => {
    setPasswordType("password");
  };

  const updateUserPassword = () => {
    console.log("Update user password");
    console.log("User:", user);

    if (user !== null) {
      const token = user.token;

      updatePassword(token, password, newpassword, newPasswordConfirm);
    }

    user = null;

    navigate("/login");
  };

  return (
    <section className={styles["password"]}>
      <label className={styles["password__label"]} htmlFor="currentPassword">
        Current Password
      </label>
      <input
        className={styles["password__input"]}
        id="currentPassword"
        type={passwordType}
        value={password}
        onChange={handlePassword}
      />
      {passwordType === "password" ? (
        <AiOutlineEyeInvisible onClick={handlePasswordType} />
      ) : (
        <AiOutlineEye onClick={resetHandlePasswordType} />
      )}
      <label className={styles["password__label"]} htmlFor="newPassword">
        New Password
      </label>
      <input
        className={styles["password__input"]}
        id="newPassword"
        type={passwordType}
        value={newpassword}
        onChange={handleNewPassword}
      />
      {passwordType === "password" ? (
        <AiOutlineEyeInvisible onClick={handlePasswordType} />
      ) : (
        <AiOutlineEye onClick={resetHandlePasswordType} />
      )}
      <label className={styles["password__label"]} htmlFor="confirmNewPassword">
        Confirm New Password
      </label>
      <input
        className={styles["password__input"]}
        id="confirmNewPassword"
        type={passwordType}
        value={newPasswordConfirm}
        onChange={handleNewPasswordConfirm}
      />
      {passwordType === "password" ? (
        <AiOutlineEyeInvisible onClick={handlePasswordType} />
      ) : (
        <AiOutlineEye onClick={resetHandlePasswordType} />
      )}
      <button
        type="button"
        className={styles["password__button"]}
        onClick={updateUserPassword}
      >
        Update Password
      </button>
    </section>
  );
};

export default ManagePassword;
