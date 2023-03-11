import { LoginActions } from "../slices/loginSlice";

export const fetchUser = (email:string, password:string) => {
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

        const data = await response.json()

        console.log(data.data.user);

        const user = data.data.user

        const person = {
            name: user.name,
            cart: user.cart,
            role: user.role
        }

        _dispatch(LoginActions.login(person))
    }
}