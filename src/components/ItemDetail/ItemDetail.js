import React from 'react'; 
import ItemCount from '../ItemCount/ItemCount.js';


export default function ItemDetail(props) {

    return(
      <div>
        <h3> Seleccionaste: </h3>
     
       
        <h3>{props.nombre}</h3>
        <h3>${props.precio}</h3>
        


        <ItemCount />
        <button>Comprar</button>
        <hr></hr>
     
      </div>
    ) 
}