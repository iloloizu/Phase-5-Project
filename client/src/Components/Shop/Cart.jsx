import React from 'react'

function Cart({cartItem, favorites}) {
  
  const shoppingItems = cartItem.map((cart)=> 
  <ul>
    <li>
      <img alt={cart.name.shopName} src={cart.image.shopImage}/>
      <p>{cart.name.shopName}</p>
      <p>{cart.colorway.shopColorway}</p>
      <p>{cart.price.shopPrice}</p>
      
    </li>
  </ul>
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