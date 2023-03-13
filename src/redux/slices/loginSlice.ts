import { createSlice } from "@reduxjs/toolkit";

interface User {
    status: string;
    name: string,
    cart: string[],
    role: string,
    token: string
}

interface LoginState {
    user: User | null;
}

const initialState: LoginState = {
    user: null,
};

const loginSlice = createSlice({
    name: 'User',
    initialState,
    reducers: {
        login: (state, action) => {
            state.user = action.payload
            
        },
    }
})

export const LoginActions = loginSlice.actions;

export default loginSlice.reducer;