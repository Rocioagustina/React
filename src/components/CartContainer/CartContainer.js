import React, {useContext} from 'react';
import CartContext from '../CartContext/CartContext';
import {Link} from 'react-router-dom';


function CartContainer() {

    const { products, delProduct, getGrandTotal, productsCount } = useContext(CartContext);

    const handleDel = (p) => {
        delProduct(p.id);
    };

    return(
        <>
       
        <div><h3>Tu carrito</h3></div>
        {products.length === 0 ?
            (
                <>
                <p>Tu carrito está vacío</p>
                
                </>
                )
            :products.map((product) => {
                return(
                    <div className="dataContainer" key={product.id}>
                        <p className="cartText">Id de tu producto: {product.id}</p>
                        <p className="cartText">Cantidad: {product.number}</p>
                        <p className="cartText">Título: {product.title}</p>
                        <p className="cartText">Precio por unidad: ${product.price}</p>
                        <p className="cartText">Precio Total: ${product.price * product.number}</p>
                        <button onClick={() => handleDel(product)}>X</button>
                    </div> 
                )
            })
            }
        
        <div className="totals">
            <p>Cantidad de Productos:</p>
            <p>{productsCount()}</p>
            <p>Total Compra:</p>
            <p>${getGrandTotal()}</p>
        </div>
        
        </>
    )
}

export default CartContainer; 