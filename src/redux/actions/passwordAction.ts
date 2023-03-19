import { LoginActions } from "../slices/loginSlice";

export const updatePassword = async (
  token: string,
  password: string,
  newPassword: string,
  confirmNewPassword: string
) => {
    const response = await fetch(
      "https://amazon-clone-api-zq31.onrender.com/api/v1/users/updatemypassword",
      {
        method: "PATCH",
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          passwordCurrent: password,
          password: newPassword,
          passwordConfirm: confirmNewPassword,
        }),
      }
    );
    const data = await response.json();
  console.log(data);

   const status = data.status;
   const jwt = data.token;
  const user = data.data.user;
  
   const person = {
     name: user.name,
     cart: user.cart,
     role: user.role,
     id: user._id,
     status,
     token: jwt
   };

   LoginActions.login(person);
};
