import React, {useEffect,
     useState
    } from 'react';
import { useDispatch, useSelector} from "react-redux";
import { Card, Button } from 'react-bootstrap'

function ShoePage() {
  
  const fetchFromStore = useSelector((state) => state.sneakers.entities)

  console.log(fetchFromStore)

  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={`${fetchFromStore[0].image}`} />
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
    </div>
  )
}

export default ShoePage;