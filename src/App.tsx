import React, { FC } from 'react';
import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import MobileNavbar from './components/MobileNavbar';
import Account from './components/Account';
import Orders from './components/Orders';
import Login from './components/Login';
import SignUp from './components/SignUp';

const App:FC = () => {
  return (
    <>
      <Routes>
        <Route path="Login" element={<Login />} />
        <Route path='SignUp' element={<SignUp/>}/>
      </Routes>
      <Navbar />
      <MobileNavbar />
      <Routes>
        <Route path="Account" element={<Login />} />
        <Route path="Orders" element={<Orders />} />
      </Routes>
    </>
  );
}

export default App;
