import React from 'react';
// import { useState, useEffect } from 'react';
import { Card, Button} from 'react-bootstrap'

function ShopCard(favorites, cartItem, setCartItem) {
    let shopImage = favorites.image.image
    let shopName = favorites.name.name
    let shopColorway = favorites.colorway.colorway
    let shopLink = favorites.link.link
    let shopDescription = favorites.description.description
    let shopPrice = favorites.price.price
    let shopID = favorites.id.id
    let shopBrand = favorites.brand.brand
    
    const newShoe = {
      id: {shopID},
      colorway: {shopColorway},
      name: {shopName},
      description: {shopDescription},
      price: {shopPrice},
      link: {shopLink},
      image: {shopImage},
      brand: {shopBrand},
    }
  
    // function onSubmit(event) {
    //   event.preventDefault();
    //     dispatch(
    //       createSneakers({
    //         colorway: {colorway},
    //         name: {name},
    //         description: {description},
    //         price: {price},
    //         link: {link},
    //         image: {image},
    //         brand: {brand},
    //       })
    //     );
    // }

    function addShoesToCart(){
      setCartItem([...cartItem, newShoe])
      console.log(`${favorites.name.name} added`)
      console.log(cartItem)
      // alert(`${favorites.name.name} added`)
  
      // fetch(`http://localhost:3000/likes/`, {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: "",
      //   })
      //     .then((r) => r.json())
    }

    console.log(shopName)
  return (
    <>
      <Card variant="dark" style={{ width: '25rem' }}>
        <Card.Img variant="left" src={shopImage} alt={shopName} />
        <Card.Body>
          <Card.Title>{shopName}</Card.Title>
          <Card.Subtitle>{shopColorway}</Card.Subtitle>
          <Card.Text>
            {shopDescription}
          </Card.Text>
          <Button variant="dark" href={shopLink}>
             {"Purchase for $"}{shopPrice}{" from StockX"}
             </Button><br/><br/>
          <Button variant="dark" onClick={addShoesToCart}>
             {"Add to Cart"} </Button>
            <br/>
            <br/>
        </Card.Body>
      </Card>

    
    </>
  )
}

export default ShopCard;