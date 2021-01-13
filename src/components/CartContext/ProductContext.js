import React, {createContext, useState, useEffect} from 'react';
import products from '../Item/Item';

    
    const ProductContext = createContext();


function ProductContextProvider({children}) {
    const [producto, setProducto] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            const promise = new Promise((resolve, reject) => {
                resolve(products);
            });
            promise.then(products => {
                setProducto(products);
            })
        }, 100);
    },[])    

    return(
        <ProductContext.Provider value={producto}>
            {children}
        </ProductContext.Provider>
    )
}

   
export default ProductContext;
export {ProductContextProvider};