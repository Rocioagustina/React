import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar"
import "bootstrap/dist/css/bootstrap.min.css"
import { MenuItems } from './components/Navbar/MenuItems';

let App = () => {
  return (
    <>
    <Navbar/>
    <MenuItems/>
    </>
  );
}

export default App;
