import React from 'react';
import CartWidget from '../CartWidget/CartWidget.js'
import ItemListContainer from '../ItemList/ItemListContainer.js'
import ItemCount from '../ItemCount/ItemCount.js'
import './Navbar.css'





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
          <ItemListContainer nombre="Usuario"/>      
        </nav>    
        <div>
          <ItemCount />
        </div>
      </header>             
      );
  }

  export default Navbar;

