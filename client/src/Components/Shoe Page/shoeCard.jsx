import React, { useState } from "react";
import { Card, Button } from 'react-bootstrap'

function ShoeCard({colorway, name, description, price, link, image}) {
//   const sneakerData = useSelector((state) => [...state]);

  // console.log(fetchFromStore)

  return (
    <>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={`${image}`} />
        <Card.Body>
          <Card.Title>{colorway}</Card.Title>
          <Card.Subtitle>{name}</Card.Subtitle>
          <Card.Text>
           {description}
          </Card.Text>
           <Button variant="dark" href={link}>
             
             {"Purchase Here for $"}{price} </Button>
          {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
      </Card>

    </>
  );
}

export default ShoeCard;