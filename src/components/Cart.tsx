import React, { FC } from "react";
import { useAppSelector } from "../redux";

const Cart: FC = () => {
    const cart = useAppSelector((state)=>{
        return state.loginSlice.user?.cart
    })

    
  return <div></div>;
};

export default Cart;
