import React from 'react';
import ShopCard from "./ShopCard"

function Shop({setFavorites, favorites, cartItem, setCartItem}) {

  const storeFront = favorites.map((shoe)=>
  <ShopCard
    key = {shoe.id}
    id = {shoe.id}
    name={shoe.name}
    colorway={shoe.colorway}
    description={shoe.description}
    image={shoe.image}
    link={shoe.link}
    price={shoe.price}
    brand={shoe.brand}
    favorites={favorites}
    cartItem={cartItem}
    setCartItem={setCartItem}
  /> )

  return (
    <div>Shop
        {storeFront}
    </div>
  )
}

export default Shop