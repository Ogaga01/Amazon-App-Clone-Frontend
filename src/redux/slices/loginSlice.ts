import { createSlice } from "@reduxjs/toolkit";
import { Cart } from "../../type";

interface User {
  id: string;
  status: string;
  name: string;
  email: string;
  cart: Cart[];
  role: string;
  token: string;
}

interface LoginState {
  user: User | null;
}

const initialState: LoginState = {
  user: null,
};

const loginSlice = createSlice({
  name: "User",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const LoginActions = loginSlice.actions;

export default loginSlice.reducer;
