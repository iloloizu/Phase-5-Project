import React from 'react';
// import { useState, useEffect } from 'react';
import { Card, Button} from 'react-bootstrap'

function ShopCard(favorites) {
    let shopImage = favorites.image.image
    let shopName = favorites.name.name
    let shopColorway = favorites.colorway.colorway
    let shopLink = favorites.link.link
    let shopDescription = favorites.description.description
    let shopPrice = favorites.price.price
    

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
          <Button variant="dark" href={shopLink}>
             {"Add to Cart"} </Button>
            <br/>
            <br/>
        </Card.Body>
      </Card>

    
    </>
  )
}

export default ShopCard;