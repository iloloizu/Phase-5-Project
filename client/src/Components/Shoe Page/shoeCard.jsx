import React, { useState } from "react";
import { Card, Button, ListGroup, Dropdown, Modal } from 'react-bootstrap'
import EditForm from "./EditForm";
import stockX from "./StockX_logo_white.png"

function ShoeCard({colorway, name, description, price, link, image, brand}) {
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
             {"Purchase for $"}{price}
             {/* {` from ${stockX}`}  */}
             </Button><br/><br/>
          <Button variant="dark" href={link}>
             {"Purchase from Space City Sneakers"} </Button>
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

      <Modal 
      show={show}
      onHide={handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit a Sneaker Card</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditForm
          colorway={colorway}
          name={name}
          description={description}
          price={price}
          link={link}
          image={image}
          brand={brand}
          handleClose={handleClose}
          />
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer> */}
      </Modal>
    </>
  );
}

export default ShoeCard;