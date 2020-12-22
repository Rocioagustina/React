import React from 'react';
import "./Item.css";
import ItemCount from '../ItemCount/ItemCount.js';

const Item = (props) => {
    return (
        <div id="itemContainer">
            <img id="portadas" src={"img/productos/" + props.photo} alt={props.alt}/>
            <h5>{props.title}</h5>
            <ul>
                <li>Descripción: {props.description}</li>
                <li>Precio: {props.price}</li>
            </ul>
            <ItemCount initial={0} stock={5}/>
        </div>
    )
};

export default Item;