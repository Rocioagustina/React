import React, {useState, useEffect} from 'react';
import products  from '../Item/Item';
import ItemCount from '../ItemCount/ItemCount';
import {Link} from 'react-router-dom';



function ItemList(){
    const [producto, setItem] = useState([]);


useEffect(() => {
    setTimeout(() => {
        const promise = new Promise((resolve, reject) => {
            resolve(products);
        });
        promise.then(products => {
            setItem(products);
        })
    }, 1000);
},[])

    return(
        <>
            {producto.map((e) => {
                return(
                        <div key={e.id} id="itemContainer">
                                <div id="book">
                                <Link to={`/itemDetailContainer/${e.id}`}>
                                </Link>
                                </div>
                                <div>
                                <h2>{e.title}</h2>
                                <p>${e.price}</p>
                                </div>
                                <div>
                                <ItemCount details={{id: e.id}}/>
                                </div>
                        </div>
                )
            })
            }
        </>
    )
}


export default ItemList;