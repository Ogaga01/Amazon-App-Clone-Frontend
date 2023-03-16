export const updatePassword = (
  token: string,
  password: string,
  newPassword: string,
  confirmNewPassword: string
) => {
  return async () => {
    const response = await fetch(
      "https://amazon-clone-api-zq31.onrender.com/api/v1/users/updatemypassword",
      {
        method: "PATCH",
        headers: {
          authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          passwordCurrent: password,
          password: newPassword,
          passwordConform: confirmNewPassword,
        }),
      }
    );
    const data = response.json();
    console.log(data);
  };
};
