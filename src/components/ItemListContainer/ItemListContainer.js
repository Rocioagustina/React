import React, { useState, useEffect } from 'react';
import Item from '../Item/Item.js';
import ItemList from '../ItemList/ItemList.js';



const getProducts = new Promise(function (resolve) {
        setTimeout(() => {
            resolve(Item);
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


