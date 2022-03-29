import React from 'react'

function Cart({cartItem, setCartItem}) {
  let cartName = cartItem[0].name.shopName

  return (
    <div>hello {cartName}</div>
  )
}

export default Cart