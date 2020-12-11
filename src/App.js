import React  from 'react';
import Navbar from './components/Navbar/Navbar'
import './App.css';
import ItemListContainer from './components/ItemList/ItemListContainer'



let App = () => {
  return (
   <div className="App">
     <Navbar />  
     <ItemListContainer nombre="Usuario"/>      
   </div>
  );
}

export default App;

