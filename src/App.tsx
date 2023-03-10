import React, { FC } from 'react';
import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import MobileNavbar from './components/MobileNavbar';
import Account from './components/Account';
import Orders from './components/Orders';
import Login from './components/Login';

const App:FC = () => {
  return (
    <>
      <Routes>
        <Route path="login" element={<Login />} />
      </Routes>
      <Navbar />
      <MobileNavbar />
      <Routes>
        <Route path="Account" element={<Account />} />
        <Route path="Orders" element={<Orders />} />
      </Routes>
    </>
  );
}

export default App;
