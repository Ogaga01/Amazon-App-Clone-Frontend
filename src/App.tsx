import React, { FC } from 'react';
import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import MobileNavbar from './components/MobileNavbar';
import Account from './components/Account';
import Orders from './components/Orders';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Homepage from './components/Homepage';
import ManageAccount from './components/ManageAccount';

const App: FC = () => {
  // const shouldShowNavbar = !["/Login", "/SignUp"].includes(
  //   // eslint-disable-next-line no-restricted-globals
  //   location.pathname
  // );

  return (
    <>
      {/* {shouldShowNavbar && <Navbar />}
      {shouldShowNavbar && <MobileNavbar/>} */}
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
          path="Orders"
          element={
            <>
              <Navbar />
              <MobileNavbar />
              <Orders />
            </>
          }
        />
        <Route path="Login" element={<Login />} />
        <Route path="SignUp" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
