import React from 'react'
import {Card} from 'react-bootstrap';

function Cart({cartItem, favorites, userData}) {

  const shoppingItems = cartItem.map((cart)=> 
  <>
    <div className="div1">
      <Card style={{ width: '8rem' }}>
        <Card.Img variant="bottom" 
          alt={cart.name.shopName} src={cart.image.shopImage}
          />
      </Card></div>
    <div className="div2">
      <h6>{cart.name.shopName}</h6>
      <p style={{color: 'gray'}}>{cart.colorway.shopColorway}</p>
      <p>{'$'}{cart.price.shopPrice}</p> 
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