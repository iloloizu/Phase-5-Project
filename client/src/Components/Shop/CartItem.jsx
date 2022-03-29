import React from 'react'

function CartItem({cartItem}) {
    console.log(cartItem[0].name.shopName)
  return (
    <div>{cartItem[0].name.shopName}</div>
  )
}

export default CartItem