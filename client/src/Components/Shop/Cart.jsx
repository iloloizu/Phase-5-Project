import React from 'react'
import CartItem from "./CartItem"

function Cart({cartItem, favorites}) {

  const shoppingCart = cartItem.map((cart)=> 
  <CartItem
  key = {cart.id}
  cartItem={cartItem}
  />
  )

  return (
    <div> 
      {cartItem.length === 0 && <div><h5>Cart is empty</h5><p>Spend some money!</p></div>}
      {shoppingCart}
      </div>
  )
}

export default Cart