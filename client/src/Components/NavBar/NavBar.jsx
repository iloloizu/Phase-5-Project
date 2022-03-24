import React from 'react'
import {LinkContainer} from 'react-router-bootstrap'
import {Navbar, Nav, Form, Container} from 'react-bootstrap'

export default function NavBar({darkMode}) {
  console.log(darkMode)
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
                                        {/* <Navbar.Text>
                                            Signed in as: <a href="#login">Mark Otto</a>
                                        </Navbar.Text> */}
                                        </Navbar.Collapse>
                                   
                                
                            </Navbar.Collapse>
            </Navbar>
    </nav>
  )}
