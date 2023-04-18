import { LoginActions } from "../slices/loginSlice";

export const editCurrentUser = (
  token: string,
  name: string,
  email: string
) => {
  return async (_dispatch: any)=>{
    const response = await fetch(
        "https://amazon-clone-api-zq31.onrender.com/api/v1/users/updateme",
        {
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
          }),
        }
      );
      const data = await response.json();
      console.log(data);
    
      const status = data.status;
        const user = data.data.user;
    
        const person = {
          name: user.name,
          cart: user.cart,
          role: user.role,
          id: user._id,
          email: user.email,
          status,
          token,
        };
    
        _dispatch(LoginActions.login(person));
  }
};
