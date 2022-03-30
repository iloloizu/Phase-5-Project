import React from 'react'
import {Card} from 'react-bootstrap';

function Cart({cartItem, favorites, userData}) {

  const shoppingItems = cartItem.map((cart)=> 
  <>
    <div className="div1">
      <Card style={{ width: '5rem' }}>
        <Card.Img variant="bottom" 
          alt={cart.name} src={cart.image}
          />
      </Card></div>
    <div className="div2">
      <h6>{cart.name}</h6>
      <p style={{color: 'gray'}}>{cart.colorway}</p>
      <p>{'$'}{cart.price}</p> 
    </div>
  </>
)

  return (
    <div> 
      {cartItem.length === 0 && <div><h5>Cart is empty</h5><p>Spend some money!</p></div>}
      {shoppingItems}
      </div>
  )
}

export default Cart