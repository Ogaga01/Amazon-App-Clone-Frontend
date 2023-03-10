import React, { FC } from 'react';
import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import MobileNavbar from './components/MobileNavbar';

const App:FC = () => {
  return (
    <>
      <Navbar />
      <MobileNavbar/>
      <Routes></Routes>
    </>
  );
}

export default App;
