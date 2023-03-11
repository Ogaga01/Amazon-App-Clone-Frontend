import { configureStore } from "@reduxjs/toolkit";
import loginReducer from './slices/loginSlice'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

export const store = configureStore({
  reducer: { loginSlice: loginReducer,  },
});

export const useAppDispatch:()=>typeof store.dispatch=useDispatch

export const useAppSelector:TypedUseSelectorHook<ReturnType<typeof store.getState>>=useSelector