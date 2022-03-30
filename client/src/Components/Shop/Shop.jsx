import React, {useState, useEffect} from 'react'
import ShopCard from "./ShopCard"

function Shop({setFavorites, favorites, cartItem, setCartItem}) {

  const [storeSneaker, setStoreSneaker] = useState([]);

  useEffect(() => {
    fetch('/store_sneakers')
      .then(r => r.json())
      .then(data => setStoreSneaker(data))
  }, [])

  const sneakerArr = [storeSneaker]
console.log(sneakerArr)

  const storeFront = storeSneaker.map((shoe)=>
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
    <div className="home">
        <h1 className='sneaker-title'>Sneakers in Stock</h1>
        <div className='card-holder'>
        {storeFront}
        </div>
    </div>
  )
}

export default Shop