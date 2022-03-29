import React from 'react';
// import { useState, useEffect } from 'react';
import { Card, Button} from 'react-bootstrap'

function ShopCard({image, name, colorway, link, description, price, id, brand, cartItem, setCartItem}) {
  
    let shopImage = image.image
    let shopName = name.name
    let shopColorway = colorway.colorway
    let shopLink = link.link
    let shopDescription = description.description
    let shopPrice = price.price
    let shopID = id.id
    let shopBrand = brand.brand
    
    const newShoe = {
      key: {shopID},
      id: {shopID},
      colorway: {shopColorway},
      name: {shopName},
      description: {shopDescription},
      price: {shopPrice},
      link: {shopLink},
      image: {shopImage},
      brand: {shopBrand},
    }
  
  //   function handlePost(obj){
  //     fetch('/likes',{
  //       method:'POST',
  //       headers: {'Content-Type': 'application/json'},
  //       body:JSON.stringify(obj)
  //     })
  //     .then(res => res.json())
  //     .then(data => {
  //       console.log(data)
  //       setCartItem([...cartItem,data])
  //       }
  //     )
  // }
    
    // setCartItem(newShoe)
    // console.log(cartItem[0].name.shopName)
    
    function addShoesToCart(){
      // setCartItem("hi")
      setCartItem([...cartItem, newShoe])
      console.log(`${name.name} added`)
      
      alert(`${name.name} added`)
      console.log(cartItem)
  
      // fetch(`http://localhost:3000/likes/`, {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: "",
      //   })
      //     .then((r) => r.json())
    }

    // console.log(shopName)
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