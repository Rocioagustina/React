import React from 'react';
import CartWidget from '../CartWidget/CartWidget.js';
import './Navbar.css'
import {Link, NavLink} from 'react-router-dom';

 let Navbar = () => {
    return (
      <header>
        <nav>
        <Link to="/">                
          <h1>
            House of books
          </h1>
        </Link>
          <ul>
           <Link to="/">
             <li>Inicio</li>  
           </Link>                         
            <Link to="/Productos">
              <li>Productos</li>
            </Link>
            <Link to="Contacto">
            <li>Contacto</li>
            </Link>
          </ul>
          <NavLink to="/carrito" activeClassName="carrito">
            <CartWidget />
            </NavLink>
        </nav>    
      </header>             
      );
  }

  export default Navbar;

