import { createSlice } from "@reduxjs/toolkit";

interface User {
    name: string,
    cart: string[],
    role: string
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