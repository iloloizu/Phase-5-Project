import React, { useState } from "react";
import { Card, Button, ListGroup, Dropdown, Modal } from 'react-bootstrap'

function ShoeCard({colorway, name, description, price, link, image}) {
//   const sneakerData = useSelector((state) => [...state]);

  // console.log(fetchFromStore)

  return (
    <>
      <Card style={{ width: '25rem' }}>
        <Card.Img variant="left" src={`${image}`} alt={name} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Subtitle>{colorway}</Card.Subtitle>
          <Card.Text>
           {description}
          </Card.Text>
          <Button variant="dark" href={link}>
             {"Purchase for $"}{price} </Button>
            <br/>
            <br/>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              EDIT
            </Dropdown.Toggle>
            <Dropdown.Menu variant="flush">
              <Dropdown.Item>
                <Button variant="dark">Delete</Button>
              </Dropdown.Item>
              <Dropdown.Item>
                <Button variant="dark">Update</Button>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Card.Body>
      </Card>

    </>
  );
}

export default ShoeCard;