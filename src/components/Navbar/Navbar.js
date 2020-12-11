import React from 'react';
import CartWidget from '../CartWidget/CartWidget'
import './style.css'




 let Navbar = () => {
    return (
      <header>
        <nav>
          <h1>
            House of books
          </h1>
          <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Productos</a></li>
            <li><a href="#">Contacto</a></li>
          </ul>
          <CartWidget />
        </nav>    
      </header>             
      );
  }

  export default Navbar;

