import { LoginActions } from "../slices/loginSlice";

export const fetchUser = (email: string, password: string) => {
  return async (_dispatch: any) => {
    const response = await fetch(
      "https://amazon-clone-api-zq31.onrender.com/api/v1/users/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      }
    );

    if (!response) {
      throw new Error(`Cant't reach server`);
    }

    const data = await response.json();

    console.log(data)

    const status = data.status;
    const token = data.token;
    const user = data.data.user;

    const person = {
      name: user.name,
      cart: user.cart,
      role: user.role,
      id: user._id,
      status,
      token,
    };

    _dispatch(LoginActions.login(person));
  };
};
