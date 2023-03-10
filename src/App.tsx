import React, { FC } from 'react';
import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import MobileNavbar from './components/MobileNavbar';
import Account from './components/Account';

const App:FC = () => {
  return (
    <>
      <Navbar />
      <MobileNavbar/>
      <Routes>
        <Route path='Account' element={<Account/>}/>
      </Routes>
    </>
  );
}

export default App;
