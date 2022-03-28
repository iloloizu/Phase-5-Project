import React from 'react'

function ShoeContainer({favorites, colorway, name, description, price, link, image, brand, id}) {
console.log(name)

  return (
    <div>{name}</div>
  )
}

export default ShoeContainer