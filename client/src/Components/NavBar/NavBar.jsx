import React, {useState} from 'react'
import {LinkContainer} from 'react-router-bootstrap'
import {Navbar, Nav, Form, Button, Modal} from 'react-bootstrap'
import ShoeContainer from '../Shoe Page/ShoeContainer';
import Cart from '../Shop/Cart';

export default function NavBar({userData, cartItem, setCartItem, favorites, darkMode}) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    console.log(userData.is_admin)

    const shoeCard = favorites.map((shoe) => 
        <ShoeContainer 
        key = {shoe.id}
        id = {shoe.id}
        name={shoe.name}
        colorway={shoe.colorway}
        description={shoe.description}
        image={shoe.image}
        link={shoe.link}
        price={shoe.price}
        brand={shoe.brand}
        favorites={favorites}
            />
        )

    return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark" id="div_top_hypers">
                    <Navbar bg="dark" expand="lg">
                        <LinkContainer to="/home">
                            <Navbar.Brand className="font">Space City Sneakers</Navbar.Brand>
                        </LinkContainer>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="mr-auto">
                                    <LinkContainer to="/shop">
                                        <Nav.Link>Shop</Nav.Link>
                                    </LinkContainer>
                                    <LinkContainer to="/news">
                                        <Nav.Link>News</Nav.Link>
                                    </LinkContainer>
                                    <LinkContainer to="/profile">
                                        <Nav.Link>Profile</Nav.Link>
                                    </LinkContainer>

                                    {userData.is_admin == true ? (
                                        <LinkContainer to="/shoes">
                                            <Nav.Link>Warehouse</Nav.Link>
                                        </LinkContainer> ) : console.log("nah")}
                                    
                                </Nav>
                                    
                                        <Navbar.Collapse className="justify-content-end">
                                            <Form>
                                                <Form.Check 
                                                    onClick={darkMode}
                                                    type="switch"
                                                    id="custom-switch"
                                                />
                                            </Form>
                                            <Button onClick={handleShow} variant="secondary" className="padding-right">My Cart</Button> 
                                            
                                        </Navbar.Collapse>
                                
                            </Navbar.Collapse>
            </Navbar>

                <Modal
                    show={show}
                    onHide={handleClose}
                    >
                    <Modal.Header closeButton>
                        <Modal.Title>Your Cart</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Cart 
                        userData={userData}
                        cartItem={cartItem}
                        setCartItem={setCartItem}
                        favorites={favorites}/>
                    </Modal.Body>
                        <Button onClick={() => alert("pay me money")} variant="outline-success">Checkout</Button>
                </Modal>                                  
        </nav>
    </div>
  )}
