import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "books",
  initialState: {
    products: [],
  },
  reducers: {
    replaceProducts(state, action) {
      state.products = action.payload.products;
    }, 
  },
});

export const bookActions = productSlice.actions

export default productSlice.reducer