import React from 'react';
import './App.css';
import { HomePage } from './layouts/Home/HomePage';
import { Footer } from './layouts/Navbar/Footer';
import { Navbar } from './layouts/Navbar/Navigation';

export const App = () => {
  return ( 
    <div>
      <Navbar/>
      <HomePage/>
      <Footer/>
    </div>
  );
}
 
