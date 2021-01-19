import React, {createContext, useState, useEffect} from 'react';
import products from '../Item/Item';
import getFirestore from '../Firebase';

    
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

    useEffect(() => {
        const db = getFirestore();

        const ItemCollection = db.collection(" ItemCollection");
        const query = ItemCollection.get();
        const highPrice = ItemCollection.where('category', '==');

        query
        .then((resultado) => {
            const data = resultado.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }))
            setProduct(data);
        })
        .catch((error) => {
            console.log(error)
        })

        highPrice.get().then((resultado) => {
            const data = resultado.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }))
            setItems(data);
        })
        .catch((error) => {
            console.log(error)
        })

    },[]);
    

    return(
        <ProductContext.Provider value={{product, items}}>
            {children}
        </ProductContext.Provider>
    )
}



   
export default ProductContext;
export {ProductContextProvider};