import React, { useState, useEffect } from 'react';
import products from '../Item/products.js';
import ItemList from '../ItemList/ItemList.js';
import '../Item/products.js'



const getProducts = new Promise(function (resolve) {
        setTimeout(() => {
            resolve(products);
        }, 2);
    });

const ItemListContainer = () => {
    const [itemData, setItemData] = useState(false);

    useEffect(() => {
        getProducts.then((itemData) => {
            setItemData(itemData);
        })  
    }, []);

    return(
        <>
            {
                itemData ? 
                <div>
                    <ul>
                        {itemData.map((product) => {
                        return (
                            <ItemList 
                            key={product.id}
                            title={product.title}
                            description={product.description}
                            price={product.price}
                            photo={product.pictureUrl}
                            alt={product.alt}/>   
                        )
                        })}
                    </ul>
                </div>
                : 
                <p></p>
            }  
        </>
   ) 
};

export default ItemListContainer;


