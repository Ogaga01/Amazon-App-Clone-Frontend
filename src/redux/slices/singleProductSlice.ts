import { createSlice } from "@reduxjs/toolkit";

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  photo: string;
}

interface ProductState {
  product: Product | null;
}

const initialState: ProductState = {
  product: null,
};

const singleProductSlice = createSlice({
  name: "singleProduct",
  initialState,
  reducers: {
    addProduct(state, action) {
      const product = action.payload;
      state.product = product;
    },
  },
});

export const singleProductAction = singleProductSlice.actions;

export default singleProductSlice.reducer;
