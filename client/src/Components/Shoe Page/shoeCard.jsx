import React, { useState } from "react";
import { Card, Button, Dropdown, Modal } from 'react-bootstrap'
import EditForm from "./EditForm";

import { useDispatch } from "react-redux";
import { createSneakers } from "../../features/shoe"
import { deleteSneakers } from '../../features/shoe';
import { useNavigate } from "react-router-dom";

function ShoeCard({cartItem, setCartItem, setFavorites, favorites, colorway, name, description, price, link, image, brand, id}) {

  const [show, setShow] = useState(false);

  const [storeSneaker, setStoreSneaker] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();
  
  const newShoe = {
    id: {id},
    colorway: {colorway},
    name: {name},
    description: {description},
    price: {price},
    link: {link},
    image: {image},
    brand: {brand},
  }

  function onSubmit(event) {
    event.preventDefault();
      dispatch(
        createSneakers({
          colorway: {colorway},
          name: {name},
          description: {description},
          price: {price},
          link: {link},
          image: {image},
          brand: {brand},
        })
      );
      window.location.reload()
  }

  function deleteButton() {
    dispatch(deleteSneakers(id));
    window.location.reload()
  }

  function addShoesToList(obj){
    setFavorites([...favorites, newShoe])
    alert(`${name} added`)
    // console.log(favorites)

    fetch(`/store_sneakers`, {
        method:'POST',
        headers: {'Content-Type': 'application/json'},
        body:JSON.stringify(obj)
      })
      .then(res => res.json())
      .then(data => {
        console.log(data)
          // window.location.reload();
        }
      )
  }
  
  function handleSubmit(e){
    e.preventDefault();

    const newerShoe = {
      key: id,
      id: id,
      colorway: colorway,
      name: name,
      description: description,
      price: price,
      link: link,
      image: image,
      brand: brand,
    }

    addShoesToList(newerShoe)
    // alert("Added to Your Storefront")
  }
  
  return (
    <>
      <Card variant="dark" style={{ width: '25rem' }}>
        <Card.Img variant="left" src={image} alt={name} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Subtitle>{colorway}</Card.Subtitle>
          <Card.Text>
           {description}
          </Card.Text>
          <Button variant="dark" href={link}>
             {"Purchase for $"}{price}{" from StockX"}
             </Button><br/><br/>
          <Button variant="dark" href={link}>
             {"Add to Cart"} </Button>
            <br/>
            <br/>
          <Button onClick={handleSubmit}
           >
             {"Add to Shop"} </Button>
            <br/>
            <br/>
          <Dropdown>
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
              EDIT
            </Dropdown.Toggle>
            <Dropdown.Menu variant="flush">
              <Dropdown.Item>
                <Button onClick={deleteButton} variant="danger">Delete</Button>
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
          id={id}
          handleClose={handleClose}
          onSubmit={onSubmit}
          />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ShoeCard;