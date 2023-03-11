import React, { FC } from 'react';
import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import MobileNavbar from './components/MobileNavbar';
import Account from './components/Account';
import Orders from './components/Orders';
import Login from './components/Login';
import SignUp from './components/SignUp';

const App: FC = () => {
  const shouldShowNavbar = !["/Login", "/SignUp"].includes(
    // eslint-disable-next-line no-restricted-globals
    location.pathname
  );

  return (
    <>
      {shouldShowNavbar && <Navbar />}
      {shouldShowNavbar && <MobileNavbar/>}
      <Routes>
        <Route path="Account" element={<Account />} />
        <Route path="Orders" element={<Orders />} />
        <Route path="Login" element={<Login />} />
        <Route path="SignUp" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
