import React, {useState} from 'react'
import {LinkContainer} from 'react-router-bootstrap'
import {Navbar, Nav, Form, Container, Button, Modal} from 'react-bootstrap'

export default function NavBar({favorites, darkMode}) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark" id="div_top_hypers">
                    <Navbar bg="dark" expand="lg">
                        <LinkContainer to="/home">
                            <Navbar.Brand>Space City Sneakers</Navbar.Brand>
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
                                    <LinkContainer to="/home">
                                        <Nav.Link>My Vault</Nav.Link>
                                    </LinkContainer>
                                    <LinkContainer to="/profile">
                                        <Nav.Link>Profile</Nav.Link>
                                    </LinkContainer>
                                    <LinkContainer to="/shoes">
                                        <Nav.Link>Warehouse</Nav.Link>
                                    </LinkContainer>
                                    <LinkContainer to="/three">
                                        <Nav.Link>Space Station</Nav.Link>
                                    </LinkContainer>
                                </Nav>
                                    
                                        <Navbar.Collapse className="justify-content-end">
                                            <Form>
                                                <Form.Check 
                                                    onClick={darkMode}
                                                    type="switch"
                                                    id="custom-switch"
                                                />
                                            </Form>
                                            <Button variant="secondary" className="padding-right">My Cart</Button> 
                                            
                                        </Navbar.Collapse>

                                
                            </Navbar.Collapse>
            </Navbar>
                                            <Modal 
                                                show={show}
                                                onHide={handleClose}
                                                >
                                                    <Modal.Header closeButton>
                                                    <Modal.Title>Edit a Sneaker Card</Modal.Title>
                                                    </Modal.Header>
                                                    <Modal.Body>
                                                        Ya cart
                                                    <Modal.Body/>
                                            <Modal/>
    </nav>
  )}
