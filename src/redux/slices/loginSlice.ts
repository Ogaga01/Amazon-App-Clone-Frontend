import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
    name: 'User',
    initialState: {
        user: null
    },
    reducers: {
        login: (state, action) => {
            state.user = action.payload
        }
    }
})

export const LoginActions = loginSlice.actions;

export default loginSlice.reducer;