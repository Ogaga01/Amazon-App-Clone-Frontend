import { createSlice } from "@reduxjs/toolkit";

interface User {
    name: string,
    cart: string[],
    role: string
}

interface LoginState {
    user: User | null;
    isLoggedIn: boolean
}

const initialState: LoginState = {
    user: null,
    isLoggedIn: false
};

const loginSlice = createSlice({
    name: 'User',
    initialState,
    reducers: {
        login: (state, action) => {
            state.user = action.payload
            
        },
        setIsLoggedIn: (state, action) => {
            if (state.user !== null) {
                state.isLoggedIn = true
            }
        }
    }
})

export const LoginActions = loginSlice.actions;

export default loginSlice.reducer;