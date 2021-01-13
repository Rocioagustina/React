import React,{useState, useEffect} from 'react';
import './ItemCount.css';
import {Link} from 'react-router-dom';


export default function ItemCount(props){

  const [count, setCount] = useState(0)
  const [showing] = useState(false);
  
  useEffect(()=>{
    if(count < 0){
      setCount(0)
    }else{
      if(count > 10){
        setCount(10)
      }
    }
  },[count]) 
  
    return(
      <>
        <div id="counter">
        <input type="button" value="+"className="button" onClick={()=>setCount(count+1)}/>
        {count}
        <input type="button" value="-" className="button" onClick={()=>setCount(count-1)}/> <br></br>  
        </div>
        <div>
        { showing
        ? <button id="carrito" onClick={onAdd}>Agregar al carrito</button>  
        : <Link to="/carrito">
            <button id="irAlCarrito"><p>Terminar compra</p></button>
          </Link>
        }
        </div>
      </>
    )
  }
  
  
  function onAdd(){

    
 
    }

      
