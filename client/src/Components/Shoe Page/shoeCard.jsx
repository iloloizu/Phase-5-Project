import React, { useState } from "react";
import { Card, Button, ListGroup, Dropdown, Modal } from 'react-bootstrap'
import EditForm from "./EditForm";

function ShoeCard({colorway, name, description, price, link, image}) {
//   const sneakerData = useSelector((state) => [...state]);

  // console.log(fetchFromStore)
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


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
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
              EDIT
            </Dropdown.Toggle>
            <Dropdown.Menu variant="flush">
              <Dropdown.Item>
                <Button variant="danger">Delete</Button>
              </Dropdown.Item>
              <Dropdown.Item>
                <Button variant="success" onClick={handleShow}>
                  Edit
                </Button>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit a Sneaker Card</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditForm/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ShoeCard;