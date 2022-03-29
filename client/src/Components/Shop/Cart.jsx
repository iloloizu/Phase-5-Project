import React from 'react'
import {Card} from 'react-bootstrap';

function Cart({cartItem, favorites}) {
  
  const shoppingItems = cartItem.map((cart)=> 
  <Card style={{ width: '18rem' }}>
  <Card.Img variant="bottom" 
  alt={cart.name.shopName} src={cart.image.shopImage}
  />
  <Card.Body>
    <Card.Text>
      <ul>
        <li>
          <p>{cart.name.shopName}</p>
          <p>{cart.colorway.shopColorway}</p>
          <p>{cart.price.shopPrice}</p>
          
        </li>
      </ul>
    </Card.Text>
  </Card.Body>
  </Card>
)

  // const shoppingCart = cartItem.map((cart)=> 
  // <CartItem
  // key = {cart.id}
  // cartItem={cartItem}
  // shoppingItems={shoppingItems}
  // />)

  return (
    <div> 
      {cartItem.length === 0 && <div><h5>Cart is empty</h5><p>Spend some money!</p></div>}
      {shoppingItems}
      </div>
  )
}

export default Cart