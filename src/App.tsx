import React, { FC } from 'react';
import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar';

const App:FC = () => {
  return (
    <>
      <Navbar />
      <Routes></Routes>
    </>
  );
}

export default App;
