import React, { FC } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import MobileNavbar from "./components/MobileNavbar";
import Account from "./components/Account";
import Orders from "./components/Orders";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Homepage from "./components/Homepage";
import ManageAccount from "./components/ManageAccount";
import ManagePassword from "./components/ManagePassword";
import ManageProducts from "./components/ManageProducts";
import SingleProduct from "./components/SingleProduct";
import EditProduct from "./components/EditProduct";
import ManageMe from "./components/ManageMe";
import Cart from "./components/Cart";

const App: FC = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <MobileNavbar />
              <Homepage />
            </>
          }
        />
        <Route
          path="Account"
          element={
            <>
              <Navbar />
              <MobileNavbar />
              <Account />
            </>
          }
        />
        <Route
          path="ManageAccount"
          element={
            <>
              <Navbar />
              <MobileNavbar />
              <ManageAccount />
            </>
          }
        />
        <Route
          path="ManagePassword"
          element={
            <>
              <Navbar />
              <MobileNavbar />
              <ManagePassword />
            </>
          }
        />
        <Route
          path="ManageProducts"
          element={
            <>
              <Navbar />
              <MobileNavbar />
              <ManageProducts />
            </>
          }
        />
        <Route
          path="Orders"
          element={
            <>
              <Navbar />
              <MobileNavbar />
              <Orders />
            </>
          }
        />
        <Route
          path="/:id"
          element={
            <>
              <Navbar />
              <MobileNavbar />
              <SingleProduct />
            </>
          }
        />
        <Route
          path="/EditProduct"
          element={
            <>
              <Navbar />
              <MobileNavbar />
              <EditProduct />
            </>
          }
        />
        <Route
          path="/ManageMe"
          element={
            <>
              <Navbar />
              <MobileNavbar />
              <ManageMe />
            </>
          }
        />
        <Route
          path="/Cart"
          element={
            <>
              <Navbar />
              <MobileNavbar />
              <Cart />
            </>
          }
        />
        <Route path="Login" element={<Login />} />
        <Route path="SignUp" element={<SignUp />} />
      </Routes>
    </>
  );
};

export default App;
