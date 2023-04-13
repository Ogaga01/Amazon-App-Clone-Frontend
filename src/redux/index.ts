import { configureStore } from "@reduxjs/toolkit";
import loginReducer from './slices/loginSlice'
import productReducer from './slices/productSlice'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

export const store = configureStore({
  reducer: { loginSlice: loginReducer, productSlice: productReducer },
});

export const useAppDispatch:()=>typeof store.dispatch=useDispatch

export const useAppSelector:TypedUseSelectorHook<ReturnType<typeof store.getState>>=useSelector
