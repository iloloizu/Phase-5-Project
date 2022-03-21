import React, { useState } from "react";
import { Card, Button } from 'react-bootstrap'

function ShoeCard({fetchFromStore}) {
//   const sneakerData = useSelector((state) => [...state]);

  // console.log(sneakerData)

  return (
    <>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={`${fetchFromStore.image}`} />
        <Card.Body>
          <Card.Title>{fetchFromStore[0].colorway}</Card.Title>
          <Card.Subtitle>{fetchFromStore[0].name}</Card.Subtitle>
          <Card.Text>
           {fetchFromStore[0].description}
          </Card.Text>
           <Button variant="dark" href={fetchFromStore[0].link}>
             
             {"Purchase Here for $"}{fetchFromStore[0].price} </Button>
          {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
      </Card>

    </>
  );
}

export default ShoeCard;