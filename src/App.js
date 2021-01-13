import React  from 'react';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import Home from './components/Home/Home';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import ItemDetail from './components/ItemDetail/ItemDetail';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Productos from './components/Productos/Productos';
import CartContainer from './components/CartContainer/CartContainer'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import CartContext, { CartContextProvider } from './components/CartContext/CartContext';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <>
      <Navbar />
    </>
    <CartContextProvider>
    <Switch>
      <Route exact path="/">
      <Home />
      </Route>
      <Route path="/ItemListContainer/:id">
      <ItemListContainer />
      </Route>
      <Route path="/Item/:id">
      <ItemDetailContainer />
      </Route>
      <Route path="/Productos">
      <Productos />
      </Route>
      <Route path="/carrito">
      <CartContainer />
      </Route>
    </Switch>
    </CartContextProvider>
    </div>
    </BrowserRouter>
  );
}

export default App;

