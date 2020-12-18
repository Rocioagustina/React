import React from "react";
import './ItemCount.css'


class ItemCount extends React.Component {
constructor() {
      super()
      this.state = {
        contador : 0
      }
    }
sumar() {
    this.setState((State) => {
      return {
        contador: State.contador + 1
      }
    })
  }
 restar() {
   if (this.state.contador > 0 ) {
    this.setState((State) => {
      return {
        contador: State.contador - 1
      }
    })
   }
  }
render() {      
    return (
        <div id='counter'>
            <h2>Contador</h2>
            <div>{this.state.contador}</div>
            <button onClick={() => this.sumar()}>+</button>
            <button onClick={() => this.restar()}>-</button>
        </div>
      )
    }
}

export default ItemCount;


