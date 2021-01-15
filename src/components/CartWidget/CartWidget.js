import React, {useContext} from 'react';
import './CartWidget.css';
import CartContext from '../CartContext/CartContext';

function CartWidget() {
    const { productsCount } = useContext(CartContext);
    return (
        <>
        <img src="img/icono.png" alt="carrito"/>
        <p>{productsCount()}</p>
        </>
    );

}

export default CartWidget;
